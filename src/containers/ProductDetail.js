import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


import {
  fetchProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../scss/style.scss";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  // const fetchProductDetail = async () => {
  //   const response = await axios
  //     .get(`https://fakestoreapi.com/products/${productId}`)
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     });
  //   dispatch(selectedProduct(response.data));
  // };

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="product-detail">
                <div className="image-wrapper">
                  <img className="img-fluid" src={image} alt={title} />
                </div>
                <div className="text-content">
                  <span>Category: {category}</span>
                  <span className="title">Product: {title}</span>
                  <span>Description: {description}</span>
                  <span className="price-title">{price}$</span>
                  <Link to={`/`}>
                    <button>Back</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
