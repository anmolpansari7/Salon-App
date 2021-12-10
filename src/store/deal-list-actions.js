import axios from "axios";
import { dealListActions } from "./deal-list-slice";

export const getDealListData = () => {
  return (dispatch) => {
    axios.get("http://localhost:5000/deallist").then((res) => {
      if (res.status === 200) {
        dispatch(dealListActions.loadDealItem(res.data));
      }
    });
  };
};

export const sendDealListData = (name, cost) => {
  return () => {
    axios
      .post("http://localhost:5000/deallist/add", {
        name: name,
        cost: cost,
      })
      .then((res) => console.log(res.data));
  };
};

export const deleteDealListData = (id) => {
  return () => {
    axios
      .delete(`http://localhost:5000/deallist/${id}`)
      .then((res) => console.log(res.data));
  };
};

export const updateDealItemData = (id, val) => {
  return () => {
    axios
      .patch(`http://localhost:5000/deallist/updateDealItem/${id}`, {
        id: id,
        name: val,
      })
      .then((res) => console.log(res.data));
  };
};

export const updateDealCostData = (id, val) => {
  return () => {
    axios
      .patch(`http://localhost:5000/deallist/updateDealCost/${id}`, {
        id: id,
        cost: val,
      })
      .then((res) => console.log(res.data));
  };
};
