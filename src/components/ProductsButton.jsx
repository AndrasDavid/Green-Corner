import React from "react";
import Dropdown from "./Dropdown";

const ProductsButton = () => {
  const dropdownItems = [
    {
      label: "Tools",
      path: "/tools",
      submenu: [
        { label: "Shovels", path: "/tools/shovels" },
        { label: "Axes", path: "/tools/axes" },
        { label: "Hammers", path: "/tools/hammers" },
        { label: "Screwdrivers", path: "/tools/screwdrivers" },
      ],
    },
    {
      label: "Electric tools",
      path: "/electric-tools",
      submenu: [
        { label: "Lawn mowers", path: "/electric-tools/lawn-mowers" },
        { label: "Chainsaws", path: "/electric-tools/chainsaws" },
        { label: "Leaf blowers", path: "/electric-tools/leaf-blowers" },
        { label: "Drills", path: "/electric-tools/drills" },
      ],
    },
    {
      label: "Plants & seeds",
      path: "/plants&seeds",
      submenu: [
        { label: "Flowers", path: "/plants&seeds/flowers" },
        { label: "Saplings", path: "/plants&seeds/saplings" },
        {
          label: "Seeds",
          path: "/plants&seeds/seeds",
          submenu: [
            {
              label: "Vegetable seeds",
              path: "/plants&seeds/seeds/vegetable-seeds",
            },
            { label: "Fruit seeds", path: "/plants&seeds/seeds/fruit-seeds" },
            { label: "Flower seeds", path: "/plants&seeds/seeds/flower-seeds" },
          ],
        },
      ],
    },
    { label: "Flower pots", path: "/flower-pots" },
    { label: "Garden decorations", path: "/garden-decorations" },
    { label: "Pools & accessories", path: "/pools&accessories" },
  ];

  return (
    <div className="App">
      <Dropdown items={dropdownItems} />
    </div>
  );
};

export default ProductsButton;
