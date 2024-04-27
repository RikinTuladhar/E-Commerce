// src/components/ProductForm.js
import React, { useEffect, useState } from "react";
import ProductApi from "../API//ProductApi";
import { storage } from "../Firebase/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import CategoriesApi from "../API/CategoriesApi"
import axios from "axios";
import { useOutletContext } from "react-router-dom";
const ProductForm = ({ onAdd }) => {
  const { reload, setReload } = useOutletContext();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [categoryId,setCategoryId] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const imageListRef = ref(storage, "images/");

  const [category,setCategory] = useState([]);

  const { postProduct } = ProductApi();
  const {getCategories} = CategoriesApi();

  const handleFile = (e) => {
    // console.log(e.target.files);
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFile(selectedFile);
        setFilePreview(reader.result);
      };

      reader.readAsDataURL(selectedFile);
    } else {
      setFile(null);
      setFilePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name || !price || !description || !file) {
      // Basic validation
      alert("Please fill in all fields");
      return;
    }
  
    const imageRef = ref(storage, `images/${file.name + v4()}`);
    uploadBytes(imageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            console.log(url);
            const newProduct = {
              name: name,
              price: parseFloat(price), // Convert to number
              description: description,
              images: url,
              categoryId: categoryId
            };
            console.log(newProduct);
            return axios
              .post("https://e-com-7w8l.onrender.com/products", newProduct)
              .then((res) => {
                alert(res.data.message);
                console.log(res.data.message);
                setReload(!reload)
              })
              .catch((err) => {
                alert(err);
              });
          })
          .catch((err) => console.log(err));
      });
    
    // Clear the form after adding
    setName("");
    setPrice("");
    setDescription("");
    setFile(null);
  };

  useEffect(()=>{
    getCategories("/category").then((res)=>{
      setCategory(res);
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  },[reload])

  return (
    <div className="container mt-4">
      <h2 className="text-3xl text-center text-cyan-500">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={handleFile}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
         <select name="" onChange={e => setCategoryId(e.target.value)} id="">
          <option value="" selected  disabled>Select Category</option>
          {
             category.map((category)=>(
               <option key={category.id} value={category.id}>{category.name}</option>
             ))
          }
         </select>
        </div>
       
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
