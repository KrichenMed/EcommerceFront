import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproduct } from "./../JS/Actions/amazonProductActions";
import ProductCard from "./../Components/ProductCard";
import CustomCarousel from "../Components/CustomCarousel";
import "../Styles/Home.css";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const productsPerPage = 25; // Number of products per page

  useEffect(() => {
    dispatch(getproduct());
  }, [dispatch]);
  useEffect(() => {
    document.body.style.backgroundColor = "#E3E6E6"; // Change to the desired background color
  }, []);
  const product = useSelector((state) => state.amazonProductReducer.product);
  const panier = useSelector((state) => state.amazonProductReducer.panier);

  // Click handler for the "Next" button
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  // Click handler for the "Previous" button
  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Calculate the start and end index of products to display based on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = product?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const departments = [
    "Sort",
    "A-Z",
    "Z-A",
    "Price: Low to High",
    "Price: High to Low",
  ];

  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);

  const handleSelect = (department) => {
    setSelectedDepartment(department);
  };
  console.log(panier);

  return (
    <div>
      <div id="customCarouselContainer" className="customCarouselContainer">
        <CustomCarousel style={{ width: "100%" }} />
      </div>

      <div id="productContainer" className="productContainer">
        <div
          id="CatBtnDiv"
          style={{
            paddingLeft: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "left", // Horizontally center content
            minHeight: "70px",
            backdropFilter: "blur(4px)",
            borderWidth: "0px",
            marginBottom: "-3px",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            zIndex:"9999999",
            position:"relative"
          }}
        >
          <DropdownButton
            title={selectedDepartment}
            onSelect={handleSelect}
            variant="light"
          >
            {departments.map((department, index) => (
              <Dropdown.Item key={index} eventKey={department}>
                {department}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
        {currentProducts &&
          currentProducts.map((el) => <ProductCard key={el._id} el={el} />)}
        <div
          id="NavBtnDiv"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px",
          }}
        >
          {currentPage > 1 && (
            <button className="prevButton" onClick={prevPage}>
              <span>Previous</span>
            </button>
          )}
          {product && product.length > indexOfLastProduct && (
            <button className="nextButton" onClick={nextPage}>
              <span>Next</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
