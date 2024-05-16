import { useState } from 'react';
import Carousel from "react-bootstrap/Carousel";
import Img1 from "../Media/Img1.jpg";
import Img2 from "../Media/Img2.jpg";
import Img3 from "../Media/Img3.jpg";
import Img4 from "../Media/Img4.jpg";
//import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const images = [Img1, Img2, Img3, Img4];

const CustomCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  return (
    <Carousel
      fade
      activeIndex={index}
      onSelect={handleSelect}
      nextIcon={<FaAngleRight style={{ fontSize: "24px", color: "red" }} />}
      prevIcon={<FaAngleLeft style={{ fontSize: "24px", color: "red" }} />}
      indicators={false}
      style={{ position: "relative", marginTop: "-10px", width: "100%" }}
    >
      {images.map((image, idx) => (
        <Carousel.Item key={idx} style={{ position: "relative" }}>
          <div style={{ position: "relative" }}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Slide ${idx + 1}`}
              style={{ width: "100%" }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to bottom, #e3e6e600, #e3e6e600, #e3e6e600, #e3e6e600, #e3e6e600 ,#E3E6E6)",
              }}
            ></div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
