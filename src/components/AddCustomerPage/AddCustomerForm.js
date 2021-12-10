import React, { useRef } from "react";
import ButtonTab from "../Layout/ButtonTab";

const AddCustomerForm = ({ onAddCustomerHandler }) => {
  const newCustomerNameInputRef = useRef();
  const newCustomerContactInputRef = useRef();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const name = newCustomerNameInputRef.current.value;
    const contact = newCustomerContactInputRef.current.value;
    if (contact.length === 10 && name.length > 0) {
      onAddCustomerHandler(name, contact);
      newCustomerContactInputRef.current.value = "";
      newCustomerNameInputRef.current.value = "";
    }
  };

  return (
    <div className="h-76 px-14 py-16 bg-list-bg mb-8 rounded-tr-list-box rounded-br-list-box">
      <div className="w-full border-dashed border-b-2 border-black">
        <h1 className="text-2xl font-medium">Add Customer</h1>
      </div>
      <form action="" className="text-right" onSubmit={onFormSubmit}>
        <ul className="h-4/6 mt-6 mb-4">
          <li className="flex justify-between border-dashed border-b-2 border-gray-800 mt-3 text-lg">
            <label htmlFor="customer-name">Name </label>
            <input
              ref={newCustomerNameInputRef}
              type="text"
              id="customer-name"
              placeholder="---"
              className="h-7 px-6 text-md focus:outline-none"
              autoComplete="off"
              required
            />
          </li>
          <li className="flex justify-between border-dashed border-b-2 border-gray-800 mt-3 text-lg">
            <label htmlFor="customer-mobile">Mobile Number </label>
            <input
              ref={newCustomerContactInputRef}
              type="text"
              id="customer-mobile"
              placeholder="---"
              className="h-7 px-6 text-md focus:outline-none"
              autoComplete="off"
              required
            />
          </li>
        </ul>
        <ButtonTab text="Add" type="submit" />
      </form>
    </div>
  );
};

export default AddCustomerForm;
