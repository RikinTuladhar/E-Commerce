/*

Admin Add Product Page

*/
import React, { useEffect, useState } from "react";
import AddProductForm from "./ProductForm";
import ProductApi from "../API/ProductApi";
import { useOutletContext } from "react-router-dom";

const AdminProduct = () => {
  const { reload, setReload } = useOutletContext();
  const { getProduct } = ProductApi();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProduct("/products")
      .then((res) => {
        setProducts(res);
      })
      .catch((er) => {
        console.log(er);
      });
  }, [reload]);

 
  return (
    <div className="container mt-5">
      <AddProductForm />
      <hr />
      <div className="mt-9 form-setcion">
        <h2 className="text-3xl text-center">Products</h2>
        <ul className="list-group">
          {products.map((product, index) => (
            <li key={index} className="list-group-item">
              <strong>{product.name}</strong><br /> Rs- ${product.price.toFixed(2)}{" "}
              <br />
              Category Name: {product.categoryName}
              <br />
              {product.description}
              {product.images && (
                <img
                  src={product.images}
                  alt={product.name}
                  className="h-40 mt-3 w-30 bg-slate-950"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminProduct;
