import React, { useEffect } from "react";
import ProductComponet from "./ProductComponent";
import axios from "axios";
import { setProducts, fetchProducts } from "../redux/actions/productActions";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import "../scss/style.scss";

const ProductListing = () => {
  // const products = useSelector((state)=> state.allProducts.products);

  const dispatch = useDispatch();

  // const fetchProducts = async () => {
  //   const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
  //     console.log("Error: ", err);
  //   });
  //   dispatch(setProducts(response.data));
  // };

  useEffect(() => {
    // fetchProducts();
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      <ProductComponet />
    </div>
  );
};

export default ProductListing;
