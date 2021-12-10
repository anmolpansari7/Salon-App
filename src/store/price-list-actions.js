import axios from "axios";
import { priceListActions } from "./price-list-slice";

export const getPriceListData = () => {
  return (dispatch) => {
    axios.get("http://localhost:5000/pricelist").then((res) => {
      if (res.status === 200) {
        dispatch(priceListActions.loadPriceItem(res.data));
      }
    });
  };
};

export const sendPriceListData = (name, cost) => {
  return () => {
    // Send Data to DB
    axios
      .post("http://localhost:5000/pricelist/add", {
        name: name,
        cost: cost,
      })
      .then((res) => console.log(res.data));
  };
};

export const deletePriceListData = (id) => {
  return () => {
    axios
      .delete(`http://localhost:5000/pricelist/${id}`)
      .then((res) => console.log(res.data));
  };
};

export const updatePriceItemData = (id, val) => {
  return () => {
    axios
      .patch(`http://localhost:5000/pricelist/updateItem/${id}`, {
        id: id,
        name: val,
      })
      .then((res) => console.log(res.data));
  };
};

export const updatePriceCostData = (id, val) => {
  return () => {
    axios
      .patch(`http://localhost:5000/pricelist/updateCost/${id}`, {
        id: id,
        cost: val,
      })
      .then((res) => console.log(res.data));
  };
};
