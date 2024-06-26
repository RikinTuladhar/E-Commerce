import React from "react";
import { Link } from "react-router-dom";
const Card = ({ product }) => {
  return (
    <>
      {product?.map((product) => (
        <div
          key={product.id}
          className="rounded-md w-44 h-56 flex flex-col gap-4  bg-[#F6F5F2]"
        >
          <div className="w-full h-[50%]">
            <img
              src= {product.images}
              alt="img"
              style={{
                width: "100%",
                height: "100%",
                borderEndEndRadius: "10px",
                objectFit:"cover"
              }}
              onError={(e) => (e.target.src = "Images/ImageNotFound.jpg")}
            />
          </div>
          <div className="w-full pl-5 ">
            <h1>{product.name}</h1>
          </div>
          <div className="w-full pl-5 ">
            <button className="btn btn-primary">
              <Link to={`/products/${product.id}`}>Read More</Link>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
