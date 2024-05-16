import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addPanier,
  deleteproduct,
  getproduct,
} from "../JS/Actions/amazonProductActions";
import CartImage1 from "../Media/blackShoppingCart.svg";
import HalfRating from "./StarsRating";

function ProductCard(props) {
  const dispatch = useDispatch();

  const handelOnclick = async () => {
    await dispatch(deleteproduct(props.el._id));
    dispatch(getproduct());
  };

  const handelOnPanier = async () => {
    await dispatch(addPanier(props.el));
  };
  const maxDescriptionLength = 68;
  const truncatedDescription =
    props.el.title.length > maxDescriptionLength
      ? props.el.title.substring(0, maxDescriptionLength) + "..."
      : props.el.title;
  return (
    <Card
      style={{
        width: "20%",
        marginTop: "2.5px",
        marginBottom: "2.5px",
        display: "inline-block",
        borderRadius: "4px",
        borderColor: "#E3E6E6",
      }}
    >
      <Card.Img
        variant="top"
        src={props.el.imgUrl}
        style={{ maxWidth: "100%", height: "286px", objectFit: "contain" }}
      />

      <Card.Body>
        <Card.Title style={{ minHeight: "90px" }}>
          {" "}
          <Link class="nav-link" to={`/product/${props.el._id}`}>
            <b>{truncatedDescription}</b>
          </Link>
        </Card.Title>
        <Card.Text style={{ maxHeight: "100px", overflow: "hidden" }}>
          <b>${props.el.price}</b>
        </Card.Text>
        <Card.Text style={{ maxHeight: "100px", overflow: "hidden" }}>
          <HalfRating rating={props.el.stars} />
          <p style={{ fontSize: "small" }}> {props.el.reviews} review(s)</p>
        </Card.Text>
        <Card.Text style={{ maxHeight: "100px", overflow: "hidden" }}>
          <b>
            Add to Cart {"        "}
            <img
              src={CartImage1}
              alt="Cart"
              width="30"
              height="30"
              style={{ cursor: "pointer" }}
              onClick={() => handelOnPanier()}
            />
          </b>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
