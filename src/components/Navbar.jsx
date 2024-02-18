import ProductsButton from "./ProductsButton";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ProductsButton />
      <input
        type="search"
        placeholder="Search product..."
        className="search-bar"
      />
      <button>My account</button>
      <button>Favorites</button>
      <button>Cart</button>
    </nav>
  );
};

export default Navbar;
