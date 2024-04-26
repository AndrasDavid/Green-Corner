import { NavLink } from "react-router-dom";
import ProductsButton from "./ProductsButton";
import MyAccountButton from "../login-components/MyAccount";
// import { useAuth } from "./../login-components/Auth";

export const Navbar = () => {
  // const auth = useAuth();

  return (
    <nav className="navbar">
      <NavLink to="/">HOME</NavLink>
      <ProductsButton />
      <NavLink to="/favorites">FAVORITES</NavLink>
      <NavLink to="/cart">CART</NavLink>
      <MyAccountButton />
      {/* <NavLink to="/profile">Profile</NavLink>
      {<NavLink to="/login">Login</NavLink>} */}
    </nav>
  );
};

export default Navbar;
