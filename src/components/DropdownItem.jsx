import React from "react";
import DropdownSubmenu from "./DropdownSubmenu";
import { useNavigate } from "react-router-dom";

const DropdownItem = ({ item }) => {
  const navigate = useNavigate();
  const redirectToPage = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="dropdown-item">
      <span
        className="dropdown-item-text"
        onClick={() => {
          redirectToPage(item.path);
        }}
      >
        {item.label}
      </span>
      {item.submenu && <DropdownSubmenu items={item.submenu} />}
    </div>
  );
};

export default DropdownItem;
