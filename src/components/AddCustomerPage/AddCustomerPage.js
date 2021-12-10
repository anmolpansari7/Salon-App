import React from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { customerListActions } from "../../store/customers-slice";
import CustomersList from "./CustomersList";
import AddCustomerForm from "./AddCustomerForm";
import TotalVisitedCustomers from "./TotalVisitedCustomers";

const AddCustomerPage = () => {
  const dispatch = useDispatch();
  const totalCustomersVisited = useSelector(
    (state) => state.customers.totalVisitedCustomers
  );

  const customers = useSelector((state) => state.customers.customerList);

  const onAddCustomerHandler = (name, contact) => {
    dispatch(
      customerListActions.addCustomers({
        id: nanoid(),
        name: name,
        mobile: contact,
        points: 0,
      })
    );
  };

  return (
    <div className="h-200 bg-page-bg px-32 pt-8 pb-6 flex">
      <CustomersList customers={customers} />
      <div className="h-full flex-grow">
        <AddCustomerForm onAddCustomerHandler={onAddCustomerHandler} />
        <TotalVisitedCustomers totalCustomersVisited={totalCustomersVisited} />
      </div>
    </div>
  );
};

export default AddCustomerPage;
