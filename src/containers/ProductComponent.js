import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, rating, image, price } = product;
    const {rate} = rating;
    return (
      <div key={id}>
        <div className="product-card">
          <span className="rating-content">Rating: {rate} </span>
          <div className="image-wrapper mt-3">
            <img src={image} alt={title} />
          </div>
          <div className="mb-2">
            <span className="title-text">{title}</span>
            <span className="price-text">{price}$</span>
          </div>
          <Link to={`/product/${id}`}>
            <div className="detail-box">
              <p>BuyNow</p>
            </div>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cards-wrapper">{renderList}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductComponent;
