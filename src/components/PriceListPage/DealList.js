import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";

const DealList = () => {
  const dealListItems = useSelector((state) => state.dealList.dealListItems);

  return (
    <div className=" h-96 px-12 pt-10 pb-8 bg-list-bg mb-8 rounded-tr-list-box rounded-br-list-box">
      <div className="w-full border-dashed border-b-2 border-black">
        <h1 className="text-2xl font-medium">Deals -</h1>
      </div>
      <ul className="h-4/6 mt-4 overflow-y-auto">
        {dealListItems.length === 0 ? (
          <p className=" text-lg mt-4 text-gray-500">No Deals To Show</p>
        ) : (
          dealListItems.map((item) => (
            <ListItem
              key={item._id}
              id={item._id}
              name={item.name}
              cost={item.cost}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default DealList;
