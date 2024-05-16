import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import {
  addPanier,
  deleteproduct,
  getproduct,
} from "../JS/Actions/amazonProductActions";
import { Link } from "react-router-dom";
import CartImage1 from "../Media/blackShoppingCart.svg";

function ProductCardAdmin(props) {
  const dispatch = useDispatch();

  const handelOnclick = async () => {
    await dispatch(deleteproduct(props.el._id));
    dispatch(getproduct());
  };

  const handelOnPanier = async () => {
    await dispatch(addPanier(props.el));
  };
  const maxDescriptionLength = 35;
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
        borderColor: "black",
      }}
    >
      <Card.Img
        variant="top"
        src={props.el.imgUrl}
        style={{ maxWidth: "100%", height: "286px", objectFit: "contain" }}
      />

      <Card.Body>
        <Card.Title> {truncatedDescription}</Card.Title>
        <Card.Text style={{ maxHeight: "100px", overflow: "hidden" }}>
          {props.el.price}
        </Card.Text>
        <Card.Text style={{ maxHeight: "100px", overflow: "hidden" }}>
          {props.el.quantity}
        </Card.Text>
        <Card.Text style={{ maxHeight: "100px", overflow: "hidden" }}>
          {props.el.category}
        </Card.Text>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 30 30"
          onClick={() => {
            handelOnclick();
          }}
          style={{ cursor: "pointer" }}
        >
          <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
        </svg>
        <img
          src={CartImage1}
          alt="Cart"
          width="30"
          height="30"
          style={{ cursor: "pointer" }}
          onClick={() => handelOnPanier()}
        />

        <Link
          to={`/editingProduct/${props.el._id}`}
          style={{ textDecoration: "none" }}
        >
          <Button variant="dark">Edit Price</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCardAdmin;
