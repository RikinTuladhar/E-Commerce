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
        <title>{product ? product.title : "Product Description"}</title>
      </Helmet>
      <div className="container">
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
          <div className="mb-3 card">
            <div className="row g-0">
              <div className="col-md-4">
                <div className="card-body">
                  {/* Check if product exists before accessing its properties */}
                  {product && (
                    <>
                      <h5 className="card-title">{product.name}</h5>
                      <h1>
                        <strong>${product.price}</strong>
                      </h1>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </>
                  )}
                  <Link to="/" className="btn btn-primary">
                    Go back
                  </Link>
                </div>
                <div className="m-3">
                  <button className="btn btn-primary" onClick="/*{addtoCart}*/">
                    Add to cart
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
