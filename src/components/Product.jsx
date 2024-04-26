import React, { useState } from "react";

const Product = ({ image, name, price }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (event) => {
    event.preventDefault();
    setIsFavorite((prevState) => !prevState);
    if (!isFavorite) {
      // Save the product to favorites
      saveFavoriteProduct(name);
    } else {
      // Remove the product from favorites
      removeFavoriteProduct(name);
    }
  };

  // Dublicate the product to "/favorites"
  // history.push({
  //   pathname: "/favorites",
  //   state: { product: { image, name, price } },
  // });

  const saveFavoriteProduct = (productName) => {
    console.log(`"${productName}" added to favorites.`);
  };

  const removeFavoriteProduct = (productName) => {
    console.log(`"${productName}" removed from favorites.`);
  };

  return (
    <div className="product">
      <button onClick={toggleFavorite}>{isFavorite ? "❤️" : "♡"}</button>
      <img src={image} alt="Product" />
      <div className="product-details">
        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
};

export default Product;

// ORIGINAL

// import React from "react";

// const Product = ({ image, name, price }) => {
//   return (
//     <div className="product">
//       <button onClick={(e) => console.log(e.target)}>X</button>
//       <img src={image} alt="Product" />
//       <div className="product-details">
//         <p className="product-name">{name}</p>
//         <p className="product-price">${price}</p>
//       </div>
//     </div>
//   );
// };

// export default Product;
