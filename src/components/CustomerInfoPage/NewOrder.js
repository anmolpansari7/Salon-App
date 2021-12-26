import React, { useState, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import BillingSection from "./BillingSection";
import ButtonTab from "../Layout/ButtonTab";
import { sendNewOrderData } from "../../store/order-actions";
import { updateCurrentCustomer } from "../../store/current-customer-actions";

const NewOrder = ({ onClose, currCustomerId }) => {
  const reduxDispatch = useDispatch();
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

  let combineList = dealListItems.map((item) => ({
    ...item,
    item: item.deal,
  }));
  combineList = [...combineList, ...priceListItems];

  const [selectedItems, setSelectedItems] = useState([]);
  const [isUsePointCheckboxChecked, setIsUsePointCheckboxChecked] =
    useState(false);
  const [usedPointsValue, setUsedPointsValue] = useState(0);
  const [remark, setRemark] = useState("");
  const [paidAmount, setPaidAmount] = useState(0);
  const [paymentMode, setPaymentMode] = useState("Cash");

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
    let removingItem = selectedItems.find(
      (item) => item._id === removingItemId
    );

    let remainingItems = selectedItems.filter(
      (item) => item.id !== removingItem.id
    );
    setSelectedItems(remainingItems);
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

  const onPaymentModeChange = (e) => {
    const mode = e.target.value;
    setPaymentMode(mode);
  };

  const onPaidAmountChange = (e) => {
    const amount = e.target.value;
    setPaidAmount(amount);
  };

  const onRemarkChange = (e) => {
    const val = e.target.value;
    setRemark(val);
  };

  const onCompletePayment = (e) => {
    e.preventDefault();
    const pointsPerRupee =
      pointsCalculator.givenPoints / pointsCalculator.forRupee;

    const pointsEarned = (pointsPerRupee * paidAmount).toFixed(2);
    const pointsUsed = isUsePointCheckboxChecked ? usedPointsValue : 0;
    let itemIds = selectedItems.map((item) => item._id);

    const currOrder = {
      customerId: currCustomerId,
      itemIds: itemIds,
      totalAmount: state.totalAmount,
      paidAmount: paidAmount,
      paymentMode: paymentMode,
      remark: remark,
      pointsUsed: pointsUsed,
      pointsGiven: pointsEarned,
      discount: state.discountAmount,
    };

    const dues = state.totalAmount - paidAmount;
    const points = (pointsEarned - pointsUsed).toFixed(2);

    reduxDispatch(sendNewOrderData(currOrder));
    reduxDispatch(updateCurrentCustomer(currCustomerId, dues, points));
    onClose();
  };

  return (
    <form className="absolute z-20 transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-list-bg px-16 py-10 w-5/12 rounded-tl-cust-info-box rounded-br-cust-info-box flex flex-col">
      <BillingSection
        combineList={combineList}
        totalAmount={state.totalAmount}
        discountAmount={state.discountAmount}
        maxPointLimit={120}
        selectedItems={selectedItems}
        onUsePointCheck={onUsePointCheck}
        onUsePointsValueChange={onUsePointsValueChange}
        onRemoveItem={onRemoveItem}
        onItemSelection={onItemSelection}
        onPaidAmountChange={onPaidAmountChange}
        onPaymentModeChange={onPaymentModeChange}
        onRemarkChange={onRemarkChange}
      />
      <ButtonTab text="Proceed" type="submit" onClick={onCompletePayment} />
    </form>
  );
};

export default NewOrder;
