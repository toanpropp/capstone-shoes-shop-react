import { Carousel } from "antd";
import React from "react";
const contentStyle = {
  height: "600px",
  background: "#f5f5f5",
};
const CarouselHome = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel  afterChange={onChange} className="slider" autoplay={false}>
      <div>
        <div style={contentStyle}>
          <div className="container">
            <div className="img">
              <img src="./img/item1.png" alt="" />
            </div>
            <div className="content">
              <h3 className="name">Product Name</h3>
              <p className="des">Product description....</p>
              <button className="btn-buy">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <div className="container">
            <div className="img">
              <img src="./img/item1.png" alt="" />
            </div>
            <div className="content">
              <h3 className="name">Product Name</h3>
              <p className="des">Product description....</p>
              <button className="btn-buy">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <div className="container">
            <div className="img">
              <img src="./img/item1.png" alt="" />
            </div>
            <div className="content">
              <h3 className="name">Product Name</h3>
              <p className="des">Product description....</p>
              <button className="btn-buy">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};
export default CarouselHome;
