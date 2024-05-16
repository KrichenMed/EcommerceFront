import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproduct } from "../../JS/Actions/amazonProductActions";
import ProductCardAdmin from "../../Components/ProductCardAdmin";

const GettingProduct = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const productsPerPage = 25; // Number of products per page

  useEffect(() => {
    dispatch(getproduct());
  }, [dispatch]);

  const product = useSelector((state) => state.amazonProductReducer.product);
  const panier = useSelector((state) => state.amazonProductReducer.panier);

  // Click handler for the "Next" button
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Calculate the start and end index of products to display based on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = product?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  console.log(panier);

  return (
    <div>
      <div
        style={{
          position: "relative",
          zIndex: "1",
          backgroundColor: "#fff",
          marginLeft: "8%",
          marginRight: "8%",
          marginTop: "-13%",
          marginBottom: "10px",
          borderRadius: "4px",
          paddingLeft: "2.5px",
          paddingRight: "2.5px",
        }}
      >
        {currentProducts &&
          currentProducts.map((el) => <ProductCardAdmin key={el._id} el={el} />)}
        {product && product.length > indexOfLastProduct && (
          <button onClick={nextPage}>Next</button>
        )}
      </div>
    </div>
  );
};

export default GettingProduct;
