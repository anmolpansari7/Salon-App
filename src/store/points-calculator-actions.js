import axios from "axios";
import { pointsCalculatorActions } from "./points-calculator-slice";

export const getPointsCalculatorData = () => {
  return (dispatch) => {
    axios.get("http://localhost:5000/pointsCalculator").then((res) => {
      if (res.status === 200) {
        dispatch(pointsCalculatorActions.loadPointsCalculatorData(res.data));
      }
    });
  };
};

export const updatePointsCalculatorForRupee = (val) => {
  return () => {
    axios
      .patch("http://localhost:5000/pointsCalculator/updateForRupee", {
        forRupee: val,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
};

export const updatePointsCalculatorGivenPoints = (val) => {
  return () => {
    axios
      .patch("http://localhost:5000/pointsCalculator/updateGivenPoints", {
        givenPoints: val,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
};

export const updatePointsCalculatorForPoints = (val) => {
  return () => {
    axios
      .patch("http://localhost:5000/pointsCalculator/updateForPoints", {
        forPoints: val,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
};

export const updatePointsCalculatorGivenDiscount = (val) => {
  return () => {
    axios
      .patch("http://localhost:5000/pointsCalculator/updateGivenDiscount", {
        givenDiscount: val,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
};
