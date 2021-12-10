import React from "react";
import ListItem from "./ListItem";

const TodaysCustomerList = () => {
  const todaysCustomers = [
    {
      id: "c1",
      name: "Virat Kohli",
      amount: 120,
    },
    {
      id: "c2",
      name: "M.S Dhoni",
      amount: 200,
    },
  ];

  return (
    <div className="h-76 px-14 py-10 bg-list-bg rounded-tr-list-box rounded-br-list-box">
      <div className="w-full border-dashed border-b-2 border-black">
        <h1 className="text-2xl font-medium">Today's Customers-</h1>
      </div>
      <ul className="h-4/6 mt-5 overflow-y-auto">
        {todaysCustomers.map((customer) => (
          <ListItem
            key={customer.id}
            id={customer.id}
            name={customer.name}
            cost={customer.amount}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodaysCustomerList;
