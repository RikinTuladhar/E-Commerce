import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import { Helmet } from "react-helmet";
import ProductApi from "../API/ProductApi";

const ProductDescription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Initial state set to null
  const [loading, setLoading] = useState(true);
  const { getProduct } = ProductApi();

  useEffect(() => {
    setLoading(true);
    getProduct(`/products/${id}`)
      .then((res) => {
        setProduct(res);
        setLoading(false); // Set loading to false after product data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false in case of error
      });
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{product ? product.name : "Product Title"}</title>
      </Helmet>
      <div>
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "50vh" }}
          >
            <div className="col-md-1">
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            </div>
          </div>
        ) : (
          <div className=" w-full min-h-[100vh] px-10 py-5 bg-[#d4d4d4] flex justify-center items-center">
            {/* card  */}
            <div className="w-[95%] md:w-[80%] flex flex-wrap  bg-[#d6d3d1]">
              {/* left  */}
              <div className="w-full md:w-[40%]  bg-[#e7e5e4]">
                <img
                  src={product.images}
                  alt="image of product"
                  className="object-contain w-full h-full"
                  onError={(e) => (e.target.src = "/Images/ImageNotFound.jpg")}
                />
              </div>
              {/* right  */}
              <div className=" w-full md:w-[60%] items-center flex flex-col ">
                <div className="w-full border-b-4  flex justify-center  pl-5 flex-col gap-3 h-[30%] bg-[#e7e5e4]">
                  <div className="text-2xl md:text-4xl">{product.name}</div>
                  <div className="text-xs"> Rating</div>
                </div>
                <div className="w-full  pb-5 flex flex-col gap-5 pl-3 pt-2 bg-[#f5f5f5] ">
                  <div className="flex flex-wrap gap-2 text-base md:text-xl">
                    <div>Rs:</div> <div>{product.price}</div>
                  </div>
                  <div className="text-base">
                    <div>Description:</div> <div>{product.description}</div>
                  </div>
                  <div className="relative flex flex-wrap gap-2 text-base">
                    {" "}
                    <div>Category:</div> <div>{product.categoryName}</div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center pb-5 md:pb-2  bg-[#e5e5e5] justify-center w-full gap-5 pt-10 text-base md:text-xl">
                  <button className="bg-[#525252] rounded-md px-2 py-1 md:px-3 md:py-2 border">
                    Add To Cart{" "}
                  </button>
                  <button className="bg-[#a1a1aa] px-2 py-1  rounded-sm md:px-3 md:py-2 border">
                    Buy Now{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDescription;
