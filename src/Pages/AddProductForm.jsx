// src/components/ProductForm.js
<<<<<<< Updated upstream:src/Pages/ProductForm.jsx
import React, { useEffect, useState } from "react";
import ProductApi from "../API/ProductApi";
import CategoriesApi from "../API/CategoriesApi";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
const ProductForm = () => {
  const { getCategories } = CategoriesApi();
  const { postProduct } = ProductApi();

  const { reload, setReload } = useOutletContext();
=======
import React, { useState } from "react";

const AddProductForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
>>>>>>> Stashed changes:src/Pages/AddProductForm.jsx

  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategories("/category")
      .then((res) => {
        console.log(res);
        setCategory(res);
      })
      .catch((err) => console.log(err));
  }, [reload]);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    images: "axs",
    categoryId: "",
  });
  const { name, description, price, categoryId } = data;

  const setDataAll = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  console.log(data);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setData({ ...data, images: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

<<<<<<< Updated upstream:src/Pages/ProductForm.jsx

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    // if (!name || !price || !description || !image || !categoryId) {
    //   alert("Please fill in all fields");
    //   return;
    // }

    postProduct("/products",data)
      .then((res) => {
        console.log(res);
      })
      .catch((er) => console.log("Error while posting " + er));

    setReload(!reload);
    setData({
      name: "",
      description: "",
      price: "",
      images: "",
      categoryId: "",
    });
    alert("Inserted")
    
=======
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!name || !price || !description || !image) {
      alert("Please fill in all fields");
      return;
    }
    const newProduct = {
      name: name,
      price: parseFloat(price), // Convert to number
      description: description,
      image: image,
    };
    onAdd(newProduct);
    // Clear the form after adding
    setName("");
    setPrice("");
    setDescription("");
    setImage(null);
>>>>>>> Stashed changes:src/Pages/AddProductForm.jsx
  };

  return (
    <div className="container mt-4">
      <h2 className="text-3xl text-center text-cyan-500">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={data.name}
            onChange={setDataAll}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            value={data.price}
            name="price"
            onChange={setDataAll}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input type="file" accept="image/*" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={data.description}
            name="description"
            onChange={setDataAll}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select name="categoryId" onChange={setDataAll}>
            <option disabled selected value="">
              Choose Your Tag
            </option>
            {category &&
              category.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
