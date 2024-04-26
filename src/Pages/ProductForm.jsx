// src/components/ProductForm.js
import React, { useState } from 'react';

const ProductForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const[image,setImage]=useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!name || !price || !description || !image) {
      alert('Please fill in all fields');
      return;
    }
    const newProduct = {
      name: name,
      price: parseFloat(price), // Convert to number
      description: description,
      image:image,
    };
    onAdd(newProduct);
    // Clear the form after adding
    setName('');
    setPrice('');
    setDescription('');
    setImage(null);
  };

  return (
    <div className="container mt-4">
      <h2 className='text-3xl text-center text-cyan-500'>Add Product</h2>
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
            onChange={handleImageChange}
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
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
