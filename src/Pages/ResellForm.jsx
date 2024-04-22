import React, { useState } from 'react';

const ResellForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
    productDetails: '',
    usedTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, such as sending the data to an API
    console.log(formData);
    // Reset form after submission
    setFormData({
      title: '',
      description: '',
      image: '',
      price: '',
      productDetails: '',
      usedTime: '',
    });
  };

  return (
    <div className="card">
      <div className="card-header">Resell Product</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image</label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productDetails" className="form-label">Product Details</label>
            <textarea
              className="form-control"
              id="productDetails"
              name="productDetails"
              value={formData.productDetails}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="usedTime" className="form-label">Used Time</label>
            <input
              type="text"
              className="form-control"
              id="usedTime"
              name="usedTime"
              value={formData.usedTime}
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResellForm;
