import React from "react";
import CustomSelect from "./CustomSelect";
import SelectedItems from "./SelectedItems";
import UsePointSection from "./UsePointSection";

const BillingSection = ({
  combineList,
  totalAmount,
  discountAmount,
  maxPointLimit,
  onUsePointCheck,
  onUsePointsValueChange,
  selectedItems,
  onRemoveItem,
  onItemSelection,
}) => {
  return (
    <div className="mt-12 mb-5">
      <div className="w-full border-dashed border-b-2 border-black">
        <h1 className="text-3xl font-medium">Billing -</h1>
      </div>
      <div>
        <CustomSelect
          combineList={combineList}
          onItemSelection={onItemSelection}
        />
        {selectedItems.length === 0 ? (
          <p className="mt-6">No Item Selected</p>
        ) : (
          <ul className=" max-h-32 mt-6 overflow-y-auto">
            {selectedItems.map((item) => (
              <SelectedItems
                key={item._id}
                id={item._id}
                name={item.name}
                cost={item.cost}
                onRemoveItem={onRemoveItem}
              />
            ))}
          </ul>
        )}
        <UsePointSection
          discountAmount={discountAmount}
          maxPointLimit={maxPointLimit}
          onUsePointCheck={onUsePointCheck}
          onUsePointsValueChange={onUsePointsValueChange}
        />
        <li className="flex flex-grow justify-between border-dashed border-b-2 border-gray-800 mt-3 text-lg">
          <p className="font-medium">Total Amount</p>
          <p className="font-medium">{totalAmount} Rs.</p>
        </li>
      </div>
    </div>
  );
};

export default BillingSection;
