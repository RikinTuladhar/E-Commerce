import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import ProductApi from "../API/ProductApi";
const CardContainer = () => {
  const [product, setProduct] = useState([]);
  const { getProduct } = ProductApi();
  useEffect(() => {
    getProduct("/products")
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-full pb-10   bg-[#ececec]">
      <div className="w-full h-20 pt-3 pl-5">
        {" "}
        <h1 className="text-2xl">Products</h1>
      </div>
      <div className="overflow-hidden px-5 grid py-10 grid-cols-5 gap-5 justify-items-center w-full h-auto bg-[#c9c9c9a9]">
        <Card product={product} />
      </div>
    </div>
  );
};

export default CardContainer;
