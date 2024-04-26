import Navbar from "../components/Navbar";
import LogoNav from "../components/LogoNav";
import ProductList from "../components/ProductList";

export const Template = ({ children }) => {
  return (
    <div>
      <LogoNav />
      <Navbar />
      {children}
      <ProductList />
    </div>
  );
};
