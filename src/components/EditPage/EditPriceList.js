import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditableListItems from "./EditableListItems";
import InputNewItems from "./InputNewItems";
import {
  sendPriceListData,
  deletePriceListData,
  updatePriceItemData,
  updatePriceCostData,
  getPriceListData,
} from "../../store/price-list-actions";

const EditPriceList = () => {
  const dispatch = useDispatch();
  const priceListItems = useSelector((state) => state.priceList.priceListItems);

  const addPriceItemHandler = (currItem, currPrice) => {
    if (currPrice !== "" && currItem !== "") {
      dispatch(sendPriceListData(currItem, currPrice));
    }
  };

  const handlePriceItemChange = (val, id) => {
    dispatch(updatePriceItemData(id, val));
  };

  const handlePriceCostChange = (val, id) => {
    dispatch(updatePriceCostData(id, val));
  };

  const handleItemDelete = (id) => {
    dispatch(deletePriceListData(id));
  };

  useEffect(() => {
    dispatch(getPriceListData());
  }, [priceListItems, dispatch]);

  return (
    <div className="px-12 py-8 pb-6 mr-8 w-1/2 rounded-tl-list-box rounded-bl-list-box bg-list-bg flex flex-col">
      <div className="w-full border-dashed border-b-2 border-black">
        <h1 className="text-4xl font-medium">Price List</h1>
      </div>
      <ul className="mt-4 overflow-y-auto">
        {priceListItems.map((item) => (
          <EditableListItems
            key={item._id}
            id={item._id}
            name={item.name}
            cost={item.cost}
            onItemChange={handlePriceItemChange}
            onCostChange={handlePriceCostChange}
            onDeleteItem={handleItemDelete}
          />
        ))}
        <InputNewItems onBlur={addPriceItemHandler} />
      </ul>
    </div>
  );
};

export default EditPriceList;
