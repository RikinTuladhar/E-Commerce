import React, { useEffect, useState } from "react";
import CategoriesCard from "../Components/CategoriesCard";
import CategoriesApi from "../API/CategoriesApi";

const CardContainer = () => {
  const [categories, setCategories] = useState([]);
  const { getCategories } = CategoriesApi();

  useEffect(() => {
    getCategories("/category")
      .then((res) => {
        setCategories(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="pt-10 w-full pb-10  bg-[#ececec]">
      <div className="w-full h-20 pt-3 pl-5">
        {" "}
        <h1 className="text-2xl">Categories</h1>
      </div>
      <div className="overflow-hidden px-5 grid py-10 grid-cols-6 gap-5 justify-items-center w-full h-auto bg-[#c9c9c9a9]">
        <CategoriesCard categories={categories} />
      </div>
    </div>
  );
};

export default CardContainer;
