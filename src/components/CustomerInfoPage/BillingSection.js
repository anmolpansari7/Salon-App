import React from "react";
import CustomSelect from "./CustomSelect";
import SelectedItems from "./SelectedItems";
import UsePointSection from "./UsePointSection";
import TotalingSection from "./TotalingSection";

const BillingSection = ({
  combineList,
  totalAmount,
  discountAmount,
  onUsePointCheck,
  onUsePointsValueChange,
  selectedItems,
  onRemoveItem,
  onItemSelection,
  onPaymentModeChange,
  onPaidAmountChange,
  onRemarkChange,
}) => {
  return (
    <div className="mb-5">
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
                key={item.id}
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
          onUsePointCheck={onUsePointCheck}
          onUsePointsValueChange={onUsePointsValueChange}
        />
        <TotalingSection
          totalAmount={totalAmount}
          onPaymentModeChange={onPaymentModeChange}
          onPaidAmountChange={onPaidAmountChange}
          onRemarkChange={onRemarkChange}
        />
      </div>
    </div>
  );
};

export default BillingSection;
