import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Avatar from "react-avatar";
import ButtonTab from "../Layout/ButtonTab";
import { getCurrentCustomerData } from "../../store/current-customer-actions";

const CustomerDetails = ({ id, onNewOrderButtonClick }) => {
  const dispatch = useDispatch();
  const currCustomer = useSelector(
    (state) => state.currentCustomer.currentCustomer
  );

  useEffect(() => {
    dispatch(getCurrentCustomerData(id));
  }, [id, dispatch]);

  return (
    <div className=" w-96 bg-list-bg rounded-l-list-box px-9 py-10 shadow-md flex flex-col">
      <div className="flex flex-col items-center border-b-2 border-dashed border-gray-500 pb-1">
        <Avatar
          name={currCustomer.name}
          color="#7A7A7A"
          round={true}
          size="80"
          textSizeRatio={3}
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          }}
        />
        <h1 className=" font-medium text-3xl mt-5">{currCustomer.name}</h1>
        <h4 className="text-xl mt-1 text-gray-500">+91 {currCustomer.phone}</h4>
      </div>
      <ul className="w-full mt-7 mb-22 text-lg">
        <li className="flex justify-between border-b-2 border-gray-500 border-dashed mt-2">
          <p>Points -</p>
          <p>{currCustomer.points} Pts.</p>
        </li>
        <li className="flex justify-between border-b-2 border-gray-500 border-dashed mt-2">
          <p>Dues -</p>
          <p>{currCustomer.dues} Rs.</p>
        </li>
        <li className="flex justify-between border-b-2 border-gray-500 border-dashed mt-2">
          <p>Date of Birth -</p>
          <p>{moment(currCustomer.dob).format("ll")}</p>
        </li>
        <li className="flex justify-between border-b-2 border-gray-500 border-dashed mt-2">
          <p>Joined at -</p>
          <p>{moment(currCustomer.createdAt).format("ll")}</p>
        </li>
        <li className="flex justify-between border-b-2 border-gray-500 border-dashed mt-2">
          <p>Address -</p>
          <p>{currCustomer.address}</p>
        </li>
      </ul>
      <ButtonTab
        type={"button"}
        text={"Order"}
        onClick={onNewOrderButtonClick}
      />
    </div>
  );
};

export default CustomerDetails;
