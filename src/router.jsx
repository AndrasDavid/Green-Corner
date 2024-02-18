import { createBrowserRouter } from "react-router-dom";
import { Template } from "./pages/Template";
import { Homepage } from "./pages/Homepage";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <p>Not Found</p>,
  },
  {
    path: "/",
    element: (
      <Template>
        <Homepage />
      </Template>
    ),
  },

  // Products - Tools

  {
    path: "/tools",
    element: <Template> </Template>,
  },

  {
    path: "/tools/shovels",
    element: <Template></Template>,
  },

  {
    path: "/tools/axes",
    element: <Template></Template>,
  },

  {
    path: "/tools/hammers",
    element: <Template></Template>,
  },

  {
    path: "/tools/screwdrivers",
    element: <Template></Template>,
  },

  // Products - Electric tools

  {
    path: "/electric-tools",
    element: <Template></Template>,
  },

  {
    path: "/electric-tools/lawn-mowers",
    element: <Template></Template>,
  },

  {
    path: "/electric-tools/chainsaws",
    element: <Template></Template>,
  },

  {
    path: "/electric-tools/leaf-blowers",
    element: <Template></Template>,
  },

  {
    path: "/electric-tools/drills",
    element: <Template></Template>,
  },

  // Products - Plants & seeds

  {
    path: "/plants&seeds",
    element: <Template></Template>,
  },

  {
    path: "/plants&seeds/flowers",
    element: <Template></Template>,
  },

  {
    path: "/plants&seeds/saplings",
    element: <Template></Template>,
  },

  {
    path: "/plants&seeds/seeds",
    element: <Template></Template>,
  },

  {
    path: "/plants&seeds/seeds/vegetable-seeds",
    element: <Template></Template>,
  },

  {
    path: "/plants&seeds/seeds/fruit-seeds",
    element: <Template></Template>,
  },

  {
    path: "/plants&seeds/seeds/flower-seeds",
    element: <Template></Template>,
  },

  // Products - Flower pots

  {
    path: "/flower-pots",
    element: <Template></Template>,
  },

  // Products - Garden decorations

  {
    path: "/garden-decorations",
    element: <Template></Template>,
  },

  // Products - Pools & accessories

  {
    path: "/pools&accessories",
    element: <Template></Template>,
  },
]);
