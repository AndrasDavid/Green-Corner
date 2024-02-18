import React, { useState } from "react";
import DropdownItem from "./DropdownItem";

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Products
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {items.map((item, index) => (
            <DropdownItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
