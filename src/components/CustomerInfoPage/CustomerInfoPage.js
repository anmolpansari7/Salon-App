import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CustomerDetails from "./CustomerDetails";
import Order from "./Order";
import NewOrderOverlay from "./NewOrderOverlay";
import { getCurrentCustomerOrders } from "../../store/current-customer-actions";

const CustomerInfoPage = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const orders = useSelector(
    (state) => state.currentCustomer.currentCustomerOrders
  );
  const [showNewOrderForm, setShowNewOrderForm] = useState(false);

  const onNewOrderButtonClick = () => {
    setShowNewOrderForm(true);
  };

  const onCloseNewOrderForm = () => {
    setShowNewOrderForm(false);
  };

  useEffect(() => {
    dispatch(getCurrentCustomerOrders(id));
  }, [id, dispatch]);

  return (
    <div className="h-200 bg-page-bg px-32 pt-8 pb-6 flex">
      <CustomerDetails id={id} onNewOrderButtonClick={onNewOrderButtonClick} />
      <div className="grid grid-cols-3 gap-8 ml-8 pr-6 overflow-y-auto overflow-x-hidden">
        {orders.map((order) => (
          <Order key={order._id} order={order} />
        ))}
      </div>
      {showNewOrderForm && (
        <NewOrderOverlay onClose={onCloseNewOrderForm} currCustomerId={id} />
      )}
    </div>
  );
};

export default CustomerInfoPage;
