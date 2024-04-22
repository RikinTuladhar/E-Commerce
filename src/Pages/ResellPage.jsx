import React from 'react';
import ResellForm from './ResellForm';

const ResellPage = () => {
  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Resell Your Products</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ResellForm />
        </div>
      </div>
    </div>
  );
};

export default ResellPage;
