  import { useState } from "react";
  import { editproduct } from "../../JS/Actions/productActions";
  import { useDispatch } from "react-redux";
  import Button from "react-bootstrap/esm/Button";
  import { useNavigate, useParams } from "react-router-dom";

  const EditingProduct = () => {
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const { _id } = useParams();

    const handleChange = (e) => {
      setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handelClick = async () => {
      await dispatch(editproduct(_id, { price: product.price }));
      Navigate("/gettingProduct");
    };

    return (
      <div>
        <div className="login-page">
          <div className="form">
            <form className="login-form">
              <input
                type="Number"
                name="price"
                placeholder="price"
                onChange={(e) => handleChange(e)}
              />

              <Button onClick={handelClick}>Change Price </Button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  export default EditingProduct;
