import React from "react";

const CustomerDetailInput = ({
  type,
  lable,
  nameRef,
  id,
  placeholder,
  required,
}) => {
  return (
    <li className="flex justify-between border-dashed border-b-2 border-gray-800 mt-4 text-lg">
      <label htmlFor="customer-name">{lable}</label>
      <input
        ref={nameRef}
        type={type}
        id={id}
        placeholder={placeholder}
        className="h-7 px-6 text-md focus:outline-none"
        required={required}
        autoComplete="off"
      />
    </li>
  );
};

export default CustomerDetailInput;
