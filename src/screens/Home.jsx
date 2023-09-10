import React, { useEffect, useState } from "react";
import Navbaar from "./../components/Navbaar";
import Footer from "../components/Footer";
import Card from "../components/Card";
// import Carousel from "../components/Carousel";
import { Carousel } from "react-bootstrap";

const Home = () => {
  const [foodCat, setfoodCat] = useState([]);
  const [foodItem, setfoodItem] = useState([]);
  const [search, setsearch] = useState("");

  const loadData = async () => {
    let response = await fetch("http://localhost:5001/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    // console.log(response[0], response[1]);
    setfoodItem(response[0]);
    setfoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <Navbaar />
      </div>

      <div id="crsl">
        <Carousel
          data-bs-theme="dark"
          style={{ objectFit: "contain !important" }}
          id="crsl"
        >
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => {
                  setsearch(e.target.value);
                }}
              />
              {/* <button className="btn btn-outline-info" type="submit">
                Search
              </button> */}
            </div>
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

      <div className="container ">
        {foodCat !== null && foodCat !== undefined && foodCat.length !== 0
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem !== null &&
                  foodItem !== undefined &&
                  foodItem.length !== 0
                    ? foodItem
                        .filter(
                          (item) =>
                            item.CategoryName === data.CategoryName &&
                            item.name
                              .toLowerCase()
                              .includes(search.toLowerCase())
                        )
                        .map((filterItems) => {
                          return (
                            <div
                              key={filterItems._id}
                              className="col-12 col-md-6 col-lg-3"
                            >
                              <Card
                                foodItem={filterItems}
                                options={filterItems.options[0]}
                               
                              />
                            </div>
                          );
                        })
                    : "No such deta found"}
                </div>
              );
            })
          : "no dta"}
        {/* <Card /> */}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
