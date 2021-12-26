import React from "react";
import CustomLink from "./CustomLink";
import Tabs from "./Tabs";
import NavSearchBar from "./NavSearchBar";

import AddCustomerButton from "./AddCustomerButton";

const NavBar = ({ onAddCustomerButtonClick }) => {
  return (
    <nav className="px-32 py-4 bg-tab-bar flex justify-between items-center">
      <NavSearchBar />
      <div className="w-8/12 flex justify-between">
        <AddCustomerButton onClick={onAddCustomerButtonClick} />
        <CustomLink to="/price-list-page">
          <Tabs
            text="Prices"
            svgPathD="M12.5223 1.51442H8.17929c1.17743.95193 1.85301 2.27404 2.02671 3.96635H13l-.4777 1.51442h-2.3018c-.1351 1.68269-.78175 3-1.93988 3.95191-1.14847.9423-2.7023 1.4135-4.66147 1.4135l7.12245 8.4519V21H8.68597l-7.49889-8.8702-.01447-1.2692h2.35968c1.35115-.0096 2.46103-.3558 3.32963-1.03848.86859-.69231 1.38975-1.63462 1.56347-2.82693H0l.477728-1.51442H8.41091c-.16407-1.18269-.67557-2.125-1.53452-2.82692-.85894-.71154-2.0412-1.09135-3.54677-1.13943H.217149L.709354 0H13l-.4777 1.51442Z"
          />
        </CustomLink>
        <CustomLink to="/report">
          <Tabs
            text="Report"
            svgPathD="M11.5 1 1 6.25l10.5 5.25L22 6.25 11.5 1ZM1 16.75 11.5 22 22 16.75M1 11.5l10.5 5.25L22 11.5"
          />
        </CustomLink>
        <CustomLink to="/edit">
          <Tabs
            text="Edit List"
            svgPathD="M10.84 3.32H3.187A2.187 2.187 0 0 0 1 5.505v15.307A2.187 2.187 0 0 0 3.187 23h15.307a2.187 2.187 0 0 0 2.187-2.187V13.16 M19.04 1.68a2.32 2.32 0 1 1 3.28 3.28L11.935 15.346 7.56 16.44l1.093-4.374L19.041 1.68Z"
          />
        </CustomLink>
        <CustomLink to="/message">
          <Tabs
            text="Message"
            svgPathD="M3.6 1H24.4C25.83 1 27 2.04464 27 3.32143V17.25C27 18.5268 25.83 19.5714 24.4 19.5714H3.6C2.17 19.5714 1 18.5268 1 17.25V3.32143C1 2.04464 2.17 1 3.6 1Z M27 3.32141L14 11.4464L1 3.32141"
          />
        </CustomLink>
      </div>
    </nav>
  );
};

export default NavBar;
