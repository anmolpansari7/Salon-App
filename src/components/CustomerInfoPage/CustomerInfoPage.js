import React, { useState, useReducer } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import ButtonTab from "../Layout/ButtonTab";
import BillingSection from "./BillingSection";
import CustomerDetails from "./CustomerDetails";

const CustomerInfoPage = () => {
  const pointsCalculator = useSelector(
    (state) => state.pointsCalculator.pointsCalculator
  );

  const priceListItems = useSelector((state) => state.priceList.priceListItems);
  const dealListItems = useSelector((state) => state.dealList.dealListItems);

  const ACTIONS = {
    ITEM_ADDED: "item-added",
    ITEM_REMOVED: "item-removed",
    CHECK_BOX_CHECKED: "check-box-checked",
    CHECK_BOX_UNCHECKED: "check-box-unchecked",
    USE_POINTS_VALUE_CHANGE_WITH_CHECKBOX_CHECKED:
      "use-points-value-change-with-checkbox-checked",
    USE_POINTS_VALUE_CHANGE_WITH_CHECKBOX_UNCHECKED:
      "use-points-value-change-with-checkbox-unchecked",
  };

  const currCustomerData = {
    id: 1,
    name: "Anmol Pansari",
    mobile: 2365417895,
    points: 20,
  };

  let combineList = dealListItems.map((item) => ({
    ...item,
    item: item.deal,
  }));
  combineList = [...combineList, ...priceListItems];

  const [currCustomer, setCurrCustomer] = useState(currCustomerData);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isUsePointCheckboxChecked, setIsUsePointCheckboxChecked] =
    useState(false);
  const [usedPointsValue, setUsedPointsValue] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    totalAmount: 0,
    discountAmount: 0,
  });

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.ITEM_ADDED:
        return {
          totalAmount: state.totalAmount + action.payload.amount,
          discountAmount: state.discountAmount,
        };
      case ACTIONS.ITEM_REMOVED:
        return {
          totalAmount: state.totalAmount - action.payload.amount,
          discountAmount: state.discountAmount,
        };
      case ACTIONS.CHECK_BOX_CHECKED:
        return {
          totalAmount: state.totalAmount - state.discountAmount,
          discountAmount: state.discountAmount,
        };
      case ACTIONS.CHECK_BOX_UNCHECKED:
        return {
          totalAmount: action.payload.totalAmount,
          discountAmount: state.discountAmount,
        };
      case ACTIONS.USE_POINTS_VALUE_CHANGE_WITH_CHECKBOX_CHECKED:
        return {
          totalAmount:
            action.payload.totalAmount - action.payload.discountAmount,
          discountAmount: action.payload.discountAmount,
        };
      case ACTIONS.USE_POINTS_VALUE_CHANGE_WITH_CHECKBOX_UNCHECKED:
        return {
          totalAmount: action.payload.totalAmount,
          discountAmount: action.payload.discountAmount,
        };
      default:
        return state;
    }
  }

  const onItemSelection = (e) => {
    const selectedItemId = e.target.value;
    let selectedItem = combineList.find((item) => item._id === selectedItemId);
    selectedItem = { ...selectedItem, id: nanoid() };
    setSelectedItems([...selectedItems, selectedItem]);
    dispatch({
      type: ACTIONS.ITEM_ADDED,
      payload: { amount: selectedItem.cost },
    });
  };

  const onRemoveItem = (e) => {
    let removingItemId = e.target.value;
    let removingItem = selectedItems.find((item) => item.id === removingItemId);
    let remainingItems = selectedItems.filter(
      (item) => item.id !== removingItemId
    );
    setSelectedItems(remainingItems);
    console.log("Item Removed: ", removingItemId);
    dispatch({
      type: ACTIONS.ITEM_REMOVED,
      payload: { amount: removingItem.cost },
    });
  };

  const onUsePointsValueChange = (e) => {
    const currPointsValue = e.target.value;
    setUsedPointsValue(currPointsValue);
    let totalAmount = selectedItems.reduce(
      (total, item) => item.cost + total,
      0
    );
    let rupeePerPoint =
      pointsCalculator.givenDiscount / pointsCalculator.forPoints;

    let givenDiscount = rupeePerPoint * currPointsValue;

    if (isUsePointCheckboxChecked) {
      dispatch({
        type: ACTIONS.USE_POINTS_VALUE_CHANGE_WITH_CHECKBOX_CHECKED,
        payload: { totalAmount: totalAmount, discountAmount: givenDiscount },
      });
    } else {
      dispatch({
        type: ACTIONS.USE_POINTS_VALUE_CHANGE_WITH_CHECKBOX_UNCHECKED,
        payload: { totalAmount: totalAmount, discountAmount: givenDiscount },
      });
    }
  };

  const onUsePointCheck = (e) => {
    let status = e.target.checked;
    setIsUsePointCheckboxChecked(status);
    let totalAmount = selectedItems.reduce(
      (total, item) => item.cost + total,
      0
    );

    if (status) {
      dispatch({
        type: ACTIONS.CHECK_BOX_CHECKED,
      });
    } else {
      dispatch({
        type: ACTIONS.CHECK_BOX_UNCHECKED,
        payload: { totalAmount: totalAmount },
      });
    }
  };

  const onCompletePayment = (e) => {
    e.preventDefault();
    const pointsPerRupee =
      pointsCalculator.givenPoints / pointsCalculator.forRupees;
    const pointsEarned = pointsPerRupee * state.totalAmount;
    const pointsUsed = isUsePointCheckboxChecked ? usedPointsValue : 0;
    const newPointsValue = currCustomer.points - pointsUsed + pointsEarned;
    setCurrCustomer({ ...currCustomer, points: newPointsValue });
  };

  return (
    <div className="h-200 bg-page-bg px-32 pt-8 pb-6 flex justify-center">
      <form
        className="bg-list-bg px-16 pt-12 pb-8 w-7/12 rounded-tl-cust-info-box rounded-br-cust-info-box flex flex-col"
        onSubmit={onCompletePayment}
      >
        <CustomerDetails
          name={currCustomer.name}
          mobile={currCustomer.mobile}
          points={currCustomer.points}
        />
        <BillingSection
          combineList={combineList}
          totalAmount={state.totalAmount}
          discountAmount={state.discountAmount}
          maxPointLimit={currCustomer.points}
          selectedItems={selectedItems}
          onUsePointCheck={onUsePointCheck}
          onUsePointsValueChange={onUsePointsValueChange}
          onRemoveItem={onRemoveItem}
          onItemSelection={onItemSelection}
        />
        <ButtonTab text="Proceed" type="submit" />
      </form>
    </div>
  );
};

export default CustomerInfoPage;
