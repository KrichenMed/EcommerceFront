import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getproductbyid } from "../JS/Actions/amazonProductActions"; // Import the new action creator
import HalfRating from "./StarsRating";
import { Button } from "react-bootstrap";

const ProductDescriptionPage = () => {
  const { _id } = useParams(); // Get the id parameter from the URL
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.style.backgroundColor = "#E3E6E6"; // Change to the desired background color
  }, []);
  const product = useSelector((state) => state.amazonProductReducer.product); // Get product from redux store

  useEffect(() => {
    // Dispatch action to fetch product by its ID
    dispatch(getproductbyid(_id));
  }, [_id, dispatch]);
  console.log("Product by ID:", _id);

  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleAddToCart = () => {
    // Implement your add to cart logic here
    console.log("Added", quantity, "items to cart");
  };
  return (
    <div>
      {product ? (
        <div
          className="productDetailsDiv"
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            margin: "0 6%", // Use shorthand margin for left and right
            padding: "50px 6%", // Use shorthand padding for top and bottom
            display: "flex",
          }}
        >
          {/* Product Image */}
          <div className="productIMG" style={{ width: "50%" }}>
            <img
              src={product.imgUrl}
              style={{ cursor: "pointer", width: "100%" }} // Set image width to 100%
              alt={product.title} // Add alt attribute for accessibility
            />
          </div>

          {/* Product Details */}
          <div
            className="productDetails"
            style={{ width: "50%", padding: "50px 6%" }}
          >
            <h2>
              <b>{product.title}</b>
            </h2>
            <h3>Product Reference : {product.asin}</h3>
            <HalfRating rating={product.stars} />
            <p style={{ fontSize: "small" }}> {product.reviews} review(s)</p>
            <h4>
              <b>Price : ${product.price}</b>
            </h4>
            <div style={{ display: "flex", alignItems: "center",marginTop:"80px" }}>
              <Button variant="light" onClick={handleDecrement}>
                -
              </Button>
              <div style={{ padding: "0 10px" }}>{quantity}</div>
              <Button variant="light" onClick={handleIncrement}>
                +
              </Button>
              <Button
                variant="primary"
                onClick={handleAddToCart}
                style={{ marginLeft: "10px" }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <h1>HELP ME</h1>
      )}
    </div>
  );
};

export default ProductDescriptionPage;
