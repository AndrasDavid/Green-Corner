import React from "react";
import { Link, useParams } from "react-router-dom";
import Product from "./Product";
import products from "../Database/Products.json";

const ProductList = () => {
  const { category: selectedCategory } = useParams();
  const { subcategory: selectedSubCategory } = useParams();
  const { subsubcategory: selected2SubCategory } = useParams();

  return (
    <div className="products-container">
      {products
        .filter(
          (product) =>
            (!selectedCategory || product.category === selectedCategory) &&
            (!selectedSubCategory ||
              product.subcategory === selectedSubCategory) &&
            (!selected2SubCategory ||
              product.subsubcategory === selected2SubCategory)
        )
        .map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <Product
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </Link>
        ))}
    </div>
  );
};

export default ProductList;
