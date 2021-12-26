import React from "react";

const OrderItems = ({ items }) => {
  return (
    <div className="flex flex-col flex-grow gap-2 mt-7 pb-3 text-sm border-b-2 border-dashed border-gray-400">
      {items.length === 0 ? (
        <p
          key={"clear_dues"}
          className="self-baseline border-2 px-2 py-1 border-gray-500 rounded-edit-btn text-gray-600"
        >
          Clear Dues
        </p>
      ) : (
        items.map((item, index) => (
          <p
            key={index}
            className=" self-baseline border-2 px-2 py-1 border-gray-500 rounded-edit-btn text-gray-600"
          >
            {item}
          </p>
        ))
      )}
    </div>
  );
};

export default OrderItems;
