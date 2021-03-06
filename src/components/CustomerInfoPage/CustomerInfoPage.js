import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CustomerDetails from "./CustomerDetails";
import Order from "./Order";
import NewOrderOverlay from "./NewOrderOverlay";
import { getCurrentCustomerOrders } from "../../store/current-customer-actions";
import { currentCustomerActions } from "../../store/current-customer-slice";

const CustomerInfoPage = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const orders = useSelector(
    (state) => state.currentCustomer.currentCustomerOrders
  );
  const hasMore = useSelector((state) => state.currentCustomer.hasMore);
  const loading = useSelector((state) => state.currentCustomer.loading);
  const pageNumber = useSelector((state) => state.currentCustomer.pageNumber);
  const [showNewOrderForm, setShowNewOrderForm] = useState(false);

  const observer = useRef();
  const lastOrderElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          dispatch(currentCustomerActions.incremetPageNumber());
          console.log("page number increased!");
        } else {
          console.log("HasMore : ", hasMore);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, dispatch]
  );

  const onNewOrderButtonClick = () => {
    setShowNewOrderForm(true);
  };

  const onCloseNewOrderForm = () => {
    setShowNewOrderForm(false);
  };

  useEffect(() => {
    dispatch(getCurrentCustomerOrders(id, pageNumber, 6));
    console.log("fetching Page Number: " + pageNumber);
  }, [id, pageNumber, dispatch]);

  return (
    <div className="h-200 bg-page-bg px-32 pt-8 pb-6 flex">
      <CustomerDetails id={id} onNewOrderButtonClick={onNewOrderButtonClick} />
      <div className="grid grid-cols-3 gap-8 ml-8 pr-6 overflow-y-auto overflow-x-hidden">
        {orders.map((order, index) => {
          if (orders.length === index + 1) {
            return (
              <Order key={order._id} order={order} ref={lastOrderElementRef} />
            );
          } else {
            return <Order key={order._id} order={order} />;
          }
        })}
        {loading && <h1 className=" text-center">Loading ...</h1>}
        {!loading && orders.length === 0 && (
          <h1 className="text-left">No Order Placed...</h1>
        )}
      </div>
      {showNewOrderForm && (
        <NewOrderOverlay onClose={onCloseNewOrderForm} currCustomerId={id} />
      )}
    </div>
  );
};

export default CustomerInfoPage;
