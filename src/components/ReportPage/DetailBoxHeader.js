import React from "react";

const DetailBoxHeader = ({ heading, hideDetailedPage }) => {
  return (
    <div className="w-full px-14 flex justify-between">
      <h1 className="text-2xl flex-grow font-medium border-dashed border-b-2 border-black">
        {heading}
      </h1>

      <div className="border-2 border-solid border-detail-card-border rounded-edit-btn self-center h-10 flex justify-between">
        <input
          type="text"
          placeholder="search"
          className=" bg-white focus:outline-none px-3 self-center"
        />
        <label htmlFor="list-items"></label>
        <select id="list-items" className=" p-0.5 flex-1 focus:outline-none">
          <option value={"Name"}>Name</option>
          <option value={"Phone"}>Phone</option>
          <option value={"Bill Amount"}>Bill Amount</option>
        </select>
      </div>
      <button
        className=" ml-6 bg-detail-card-border rounded-edit-btn p-2 text-white"
        onClick={() => {
          hideDetailedPage();
        }}
      >
        go back
      </button>
    </div>
  );
};

export default DetailBoxHeader;
