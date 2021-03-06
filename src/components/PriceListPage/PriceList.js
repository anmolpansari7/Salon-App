import React from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";

const PriceList = () => {
  const priceListItems = useSelector((state) => state.priceList.priceListItems);

  return (
    <div className="px-12 py-8 mr-8 w-6/12 rounded-tl-list-box rounded-bl-list-box bg-list-bg flex flex-col">
      <div className="w-full border-dashed border-b-2 border-black">
        <h1 className="text-4xl font-medium">Price List</h1>
      </div>
      <ul className="mt-4 overflow-y-auto">
        {priceListItems.map((item) => (
          <ListItem
            key={item._id}
            id={item._id}
            name={item.name}
            cost={item.cost}
          />
        ))}
      </ul>
    </div>
  );
};

export default PriceList;
