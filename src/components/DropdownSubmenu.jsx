import React from "react";
import DropdownItem from "./DropdownItem";

const DropdownSubmenu = ({ items }) => {
  return (
    <div className="submenu">
      {items.map((item, index) => (
        <DropdownItem key={index} item={item} />
      ))}
    </div>
  );
};

export default DropdownSubmenu;
