import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  let isactive = match;

  return (
    <div>
      <Link
        className="flex flex-grow h-12 bg-inactive-tab-left items-center rounded-tab-cor shadow-md "
        to={to}
        {...props}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { isactive }, null)
        )}
      </Link>
    </div>
  );
};

export default CustomLink;
