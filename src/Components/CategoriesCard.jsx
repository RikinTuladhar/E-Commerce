import React from "react";

const CategoriesCard = ({ categories }) => {
  return (
    <>
      {categories?.map((categories) => (
        <div
          key={categories.id}
          className=" w-36 h-40 flex flex-col gap-2 justify-center items-center bg-[#F6F5F2]"
        >
          <div className="w-full h-auto px-2">
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "20px",
              }}
              src=""
              alt="Image"
              onError={(e) => (e.target.src = "Images/ImageNotFound.jpg")}
            />
          </div>
          <div>
            <p>{categories.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoriesCard;
