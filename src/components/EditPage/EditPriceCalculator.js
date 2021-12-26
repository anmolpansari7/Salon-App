import React, { useEffect } from "react";
import StyledEdiText from "./StyledEdiText";
import { useDispatch, useSelector } from "react-redux";
import {
  getPointsCalculatorData,
  updatePointsCalculatorForPoints,
  updatePointsCalculatorForRupee,
  updatePointsCalculatorGivenDiscount,
  updatePointsCalculatorGivenPoints,
} from "../../store/points-calculator-actions";

const EditPriceCalculator = () => {
  const dispatch = useDispatch();
  const pointsCalculator = useSelector(
    (state) => state.pointsCalculator.pointsCalculator
  );
  const { forRupee, givenPoints, forPoints, givenDiscount } = pointsCalculator;
  const handlePriceCalcForPriceChange = (val) => {
    dispatch(updatePointsCalculatorForRupee(val));
  };

  const handlePriceCalcGivenPointsChange = (val) => {
    dispatch(updatePointsCalculatorGivenPoints(val));
  };

  const handlePriceCalcForPointsChange = (val) => {
    dispatch(updatePointsCalculatorForPoints(val));
  };

  const handlePriceCalcGivenDiscountChange = (val) => {
    dispatch(updatePointsCalculatorGivenDiscount(val));
  };

  useEffect(() => {
    dispatch(getPointsCalculatorData());
  }, [pointsCalculator, dispatch]);

  return (
    <div className="h-76 px-12 py-10 bg-list-bg rounded-tr-list-box rounded-br-list-box">
      <div className="w-full border-dashed border-b-2 border-black">
        <h1 className="text-2xl font-medium">Points Calculator</h1>
      </div>
      <ul className="h-4/6 mt-5 overflow-y-auto">
        <li className="flex justify-between border-dashed border-b-2 border-gray-800 mt-3 text-lg">
          <StyledEdiText
            type="number"
            value={forRupee}
            onSave={(val) => {
              handlePriceCalcForPriceChange(val);
            }}
            cancelOnUnfocus
            cancelOnEscape
            submitOnEnter
            validation={(val) => val >= 0}
            validationMessage="Invalid Input"
            editOnViewClick={true}
          />
          <p className="text-xl self-center"> Rs. will give Customers </p>
          <StyledEdiText
            type="number"
            value={givenPoints}
            onSave={(val) => {
              handlePriceCalcGivenPointsChange(val);
            }}
            className=""
            cancelOnUnfocus
            cancelOnEscape
            submitOnEnter
            validation={(val) => val >= 0}
            validationMessage="Invalid Input"
            editOnViewClick={true}
          />
          <p className="text-xl text-right self-center"> Pts.</p>
        </li>
        <li className="flex justify-between border-dashed border-b-2 border-gray-800 mt-3 text-lg">
          <StyledEdiText
            type="number"
            value={forPoints}
            onSave={(val) => {
              handlePriceCalcForPointsChange(val);
            }}
            className=""
            cancelOnUnfocus
            cancelOnEscape
            submitOnEnter
            validation={(val) => val >= 0}
            validationMessage="Invalid Input"
            editOnViewClick={true}
          />
          <p className="text-xl self-center"> Pts. will give discount of </p>
          <StyledEdiText
            type="number"
            value={givenDiscount}
            onSave={(val) => {
              handlePriceCalcGivenDiscountChange(val);
            }}
            className=""
            cancelOnUnfocus
            cancelOnEscape
            submitOnEnter
            validation={(val) => val >= 0}
            validationMessage="Invalid Input"
            editOnViewClick={true}
          />
          <p className="text-xl text-right self-center"> Rs.</p>
        </li>
      </ul>
    </div>
  );
};

export default EditPriceCalculator;
