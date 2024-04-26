import React from "react";
import Dropdown from "./Dropdown";

const ProductsButton = () => {
  const dropdownItems = [
    {
      label: "TOOLS",
      path: "/tools",
      submenu: [
        { label: "SHOVELS", path: "/tools/shovels" },
        { label: "AXES", path: "/tools/axes" },
        { label: "HAMMERS", path: "/tools/hammers" },
        { label: "SCREWDRIVERS", path: "/tools/screwdrivers" },
      ],
    },
    {
      label: "ELECTRIC TOOLS",
      path: "/electric-tools",
      submenu: [
        { label: "LAWN MOWERS", path: "/electric-tools/lawn-mowers" },
        { label: "CHAINSAWS", path: "/electric-tools/chainsaws" },
        { label: "LEAF BLOWERS", path: "/electric-tools/leaf-blowers" },
        { label: "DRILLS", path: "/electric-tools/drills" },
      ],
    },
    {
      label: "PLANTS & SEEDS",
      path: "/plants&seeds",
      submenu: [
        { label: "FLOWERS", path: "/plants&seeds/flowers" },
        { label: "SAPLINGS", path: "/plants&seeds/saplings" },
        {
          label: "SEEDS",
          path: "/plants&seeds/seeds",
          submenu: [
            {
              label: "VEGETABLE SEEDS",
              path: "/plants&seeds/seeds/vegetable-seeds",
            },
            { label: "FRUIT SEEDS", path: "/plants&seeds/seeds/fruit-seeds" },
            { label: "FLOWER SEEDS", path: "/plants&seeds/seeds/flower-seeds" },
          ],
        },
      ],
    },
    { label: "FLOWER POTS", path: "/flower-pots" },
    { label: "GARDEN DECORATIONS", path: "/garden-decorations" },
    { label: "POOLS & ACCESSORIES", path: "/pools&accessories" },
  ];

  return (
    <div className="App">
      <Dropdown items={dropdownItems} />
    </div>
  );
};

export default ProductsButton;
