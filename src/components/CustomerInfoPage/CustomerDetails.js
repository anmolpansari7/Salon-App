import React from "react";

const CustomerDetails = ({ name, mobile, points }) => {
  return (
    <>
      <div className="w-full border-dashed border-b-2 border-black flex justify-between">
        <h1 className="text-4xl font-medium">{name}</h1>
        <p className=" text-lg pt-3">+91 {mobile}</p>
      </div>
      <div className="flex justify-between border-dashed border-b-2 border-gray-500 mt-3 text-lg">
        <p className=" text-gray-500">Points Earned</p>
        <p className="text-gray-500">{points} Pts.</p>
      </div>
    </>
  );
};

export default CustomerDetails;
