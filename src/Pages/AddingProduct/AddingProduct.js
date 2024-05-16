import Button from "react-bootstrap/esm/Button";
import "../Register/Register.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addproduct } from "../../JS/Actions/productActions";

const AddingProduct = () => {
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  console.log(product);
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handelClick = () => {
    dispatch(addproduct(product));
    Navigate("/");
  };

  return (
    <div>
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="description"
              placeholder="description"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="Number"
              name="price"
              placeholder="price"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="Number"
              name="quantity"
              placeholder="quantity"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="imgUrl"
              placeholder="imgUrl"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="Number"
              name="category"
              placeholder="category"
              onChange={(e) => handleChange(e)}
            />
            <Button onClick={handelClick}>create </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddingProduct;
