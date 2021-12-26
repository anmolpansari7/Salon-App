import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonTab from "./../Layout/ButtonTab";
import CustomerDetailInput from "./CustomerDetailInput";
import { sendNewCustomerData } from "../../store/customers-actions";

const AddCustomerFrom = ({ onFormSubmit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newCustomerNameInputRef = useRef();
  const newCustomerContactInputRef = useRef();
  const newCustomerDOBInputRef = useRef();
  const newCustomerAddressInputRef = useRef();

  const formSumbimissionHandler = (e) => {
    e.preventDefault();
    const name = newCustomerNameInputRef.current.value;
    const phone = newCustomerContactInputRef.current.value;
    const dob = newCustomerDOBInputRef.current.value;
    const address = newCustomerAddressInputRef.current.value;

    if (phone.length === 10) {
      newCustomerContactInputRef.current.value = "";
      newCustomerNameInputRef.current.value = "";

      const newCustomer = {
        name,
        phone,
        dob,
        address,
      };

      dispatch(sendNewCustomerData(newCustomer, navigate));
      onFormSubmit();
    }
  };

  return (
    <div className=" w-4/12 px-14 py-16 bg-list-bg rounded-list-box z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-full border-dashed border-b-2 border-black">
        <h1 className="text-3xl font-medium">New Customer</h1>
      </div>
      <form action="" className="text-right" onSubmit={formSumbimissionHandler}>
        <ul className="h-4/6 mt-6 mb-4">
          <CustomerDetailInput
            type={"text"}
            lable={"Name - "}
            nameRef={newCustomerNameInputRef}
            id={"customer-name"}
            placeholder={"--- Enter name"}
            required={true}
          />
          <CustomerDetailInput
            type={"number"}
            lable={"Contact Number - "}
            nameRef={newCustomerContactInputRef}
            id={"customer-contact"}
            placeholder={"--- Enter Contact Number"}
            required={true}
          />
          <CustomerDetailInput
            type={"date"}
            lable={"Date of Birth - "}
            nameRef={newCustomerDOBInputRef}
            id={"customer-dob"}
            placeholder={"DD/MM/YYYY"}
            required={true}
          />
          <CustomerDetailInput
            type={"text"}
            lable={"Address - "}
            nameRef={newCustomerAddressInputRef}
            id={"customer-address"}
            placeholder={"--- Enter Address"}
            required={false}
          />
        </ul>
        <br />
        <ButtonTab text="Add" type="submit" />
      </form>
    </div>
  );
};

export default AddCustomerFrom;
