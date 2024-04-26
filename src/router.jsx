import { createBrowserRouter } from "react-router-dom";
import { Template } from "./pages/Template";
import { Profile } from "./pages/Profile";
import { Login } from "./login-components/Login";
import { Favorites } from "./pages/Favorites";
import ProductPage from "./pages/ProductPage";
import { TemplateHome } from "./pages/TemplateHome";
// import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <p>Not Found</p>,
  },
  {
    path: "/",
    element: <TemplateHome />,
  },

  // Favorites
  {
    path: "/favorites",
    element: <Favorites />,
  },

  // Login
  {
    path: "/profile",
    element: <Profile />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/product/:id",
    element: <ProductPage />,
  },
  // Products - Tools

  {
    path: "/:category",
    element: <Template />,
    children: [
      {
        path: ":subcategory",
        element: <Template />,
      },
      {
        path: ":subsubcategory/:subsubcategory",
        element: <Template />,
      },
    ],
  },
]);
