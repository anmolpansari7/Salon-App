import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchIcon from "./../../assets/search-icon.svg";
import useShowSuggestions from "./useShowSuggestions";

const NavSearchBar = () => {
  const suggestedCustomers = useSelector(
    (state) => state.customers.suggestions
  );

  const [query, setQuery] = useState("");
  const onCustomerSearch = (e) => {
    setQuery(e.target.value);
  };

  useShowSuggestions(query);

  return (
    <div className="flex flex-col flex-grow">
      <div className="h-12 flex mr-9 bg-inactive-tab-left rounded-tab-cor shadow-md group">
        <input
          type="text"
          className="h-full px-6 flex flex-1  text-sm focus:outline-none bg-inactive-tab-left rounded-tab-cor"
          placeholder="Search"
          onChange={onCustomerSearch}
        />
        <img src={SearchIcon} alt="search" className="h-5 px-4 self-center" />
      </div>
      {suggestedCustomers.length !== 0 && (
        <ul className="top-20 bg-inactive-tab-left absolute w-96  rounded-b-tab-cor text-gray-600 border-2 border-gray-300 border-t-0 max-h-96 overflow-y-auto">
          {suggestedCustomers.map((customer) => (
            <li
              key={customer._id}
              className=" h-12 px-6 flex justify-between border-b-2 border-detail-card-border hover:bg-inactive-tab-right rounded-tab-cor"
            >
              <p className="self-center">{customer.name}</p>
              <p className="self-center">+91 {customer.phone}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavSearchBar;
