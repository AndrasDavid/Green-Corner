import { useParams } from "react-router-dom";
import products from "../Database/Products.json";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  return (
    <div>
      <div className="product-page">
        <h1 className="product-page-name">{product.name}</h1>
        <div className="product-elements">
          <div className="product-page-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-page-details">
            <p className="product-page-price">${product.price}</p>
          </div>
        </div>
      </div>
      <div className="description-container">
        <h2 className="product-description">Product description</h2>
        <p className="product-page-description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;
