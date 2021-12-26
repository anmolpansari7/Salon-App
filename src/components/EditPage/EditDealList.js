import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditableListItems from "./EditableListItems";
import InputNewItems from "./InputNewItems";
import {
  deleteDealListData,
  getDealListData,
  sendDealListData,
  updateDealCostData,
  updateDealItemData,
} from "../../store/deal-list-actions";

const EditDealList = () => {
  const dispatch = useDispatch();
  const dealListItems = useSelector((state) => state.dealList.dealListItems);

  const addDealItemHandler = (currDeal, currDealPrice) => {
    if (currDealPrice !== "" && currDeal !== "") {
      dispatch(sendDealListData(currDeal, currDealPrice));
    }
  };

  const handleDealItemChange = (val, id) => {
    dispatch(updateDealItemData(id, val));
  };

  const handleDealCostChange = (val, id) => {
    dispatch(updateDealCostData(id, val));
  };

  const handleDealDelete = (id) => {
    dispatch(deleteDealListData(id));
  };

  useEffect(() => {
    dispatch(getDealListData());
  }, [dealListItems, dispatch]);

  return (
    <div className="h-76 px-12 py-10 pb-6 bg-list-bg mb-8 rounded-tr-list-box rounded-br-list-box">
      <div className="w-full border-dashed border-b-2 border-black">
        <h1 className="text-2xl font-medium">Deals -</h1>
      </div>
      <ul className=" h-4/6 mt-4 overflow-y-auto">
        {dealListItems.map((item) => (
          <EditableListItems
            key={item._id}
            id={item._id}
            name={item.name}
            cost={item.cost}
            onItemChange={handleDealItemChange}
            onCostChange={handleDealCostChange}
            onDeleteItem={handleDealDelete}
          />
        ))}
        <InputNewItems onBlur={addDealItemHandler} />
      </ul>
    </div>
  );
};

export default EditDealList;
