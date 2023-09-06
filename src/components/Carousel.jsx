import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Carouselss = () => {
  return (
    <>
     <div id="crsl">
       <Carousel
        data-bs-theme="dark"
        style={{ objectFit: "contain !important" }}
        id="crsl"
      >
        <div className="carousel-caption" style={{ zIndex: "10" }}>
          <form className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-info" type="submit">
              Search
            </button>
          </form>
        </div>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1498&q=80"
            alt="First slide"
            style={{ filter: "brightness(30%)" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Second slide"
            style={{ filter: "brightness(30%)" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1441986060468-324610e6e6a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Third slide"
            style={{ filter: "brightness(30%)" }}
          />
        </Carousel.Item>
      </Carousel>
     </div>
    </>
  );
};

export default Carouselss;
