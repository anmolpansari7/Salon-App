import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "./../../assets/search-icon.svg";
import useShowSuggestions from "./useShowSuggestions";
import CustomLink from "./CustomLink";
import { currentCustomerActions } from "../../store/current-customer-slice";

const Suggestions = ({ customer }) => {
  const dispatch = useDispatch();
  const onSuggestionClick = () => {
    dispatch(currentCustomerActions.clearCurrCustomerOrders());
    dispatch(currentCustomerActions.setPageNumberOne());
  };

  return (
    <li
      key={customer._id}
      className="h-12 w-full px-6 flex justify-between border-b-2 border-detail-card-border hover:bg-inactive-tab-right rounded-tab-cor"
      onClick={onSuggestionClick}
    >
      <p className="self-center">{customer.name}</p>
      <p className="self-center">+91 {customer.phone}</p>
    </li>
  );
};

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
          value={query}
          onChange={onCustomerSearch}
        />
        <img src={SearchIcon} alt="search" className="h-5 px-4 self-center" />
      </div>
      {suggestedCustomers.length !== 0 && (
        <ul
          className="top-16 bg-inactive-tab-left absolute w-96  rounded-b-tab-cor text-gray-600 border-2 border-gray-300 max-h-96 overflow-y-auto"
          onClick={() => {
            setQuery("");
          }}
        >
          {suggestedCustomers.map((customer) => (
            <CustomLink key={customer._id} to={"/customer/" + customer._id}>
              <Suggestions customer={customer} key={customer._id} />
            </CustomLink>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavSearchBar;
