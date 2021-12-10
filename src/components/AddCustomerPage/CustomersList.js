import React from "react";
import CustomerListItem from "./CustomerListItem";

const CustomersList = ({ customers }) => {
  return (
    <div className="rounded-tl-list-box rounded-bl-list-box bg-list-bg px-16 py-14 mr-8 w-6/12 flex flex-col">
      <div className="w-full border-dashed border-b-2 border-black">
        <h1 className="text-4xl font-medium">Customers</h1>
      </div>
      <ul className="mt-7 overflow-y-auto">
        {customers.map((customer) => (
          <CustomerListItem
            key={customer.id}
            id={customer.id}
            name={customer.name}
            mobile={customer.mobile}
            points={customer.points}
          />
        ))}
      </ul>
    </div>
  );
};

export default CustomersList;
