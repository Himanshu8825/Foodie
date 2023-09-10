import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbaar from "../components/Navbaar";

export default function MyOrder() {
  const [orderData, setOrderData] = useState({});

  const fetchMyOrder = async () => {
    console.log(localStorage.getItem("userEmail"));
    try {
      const response = await fetch("http://localhost:5001/myOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("userEmail"),
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setOrderData(responseData);
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <div>
        <Navbaar />
      </div>

      <div className="container">
        <div className="row">
          {Object.keys(orderData).length > 0
            ? orderData.orderData.map((data, dataIndex) => {
                return (
                  data.order_data && (
                    <div key={dataIndex}>
                      {data.order_data.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          {item.map((arrayData, arrayDataIndex) => (
                            <div key={arrayDataIndex}>
                              {arrayData.Order_date ? (
                                <div className="m-auto mt-5">
                                  {arrayData.Order_date}
                                  <hr />
                                </div>
                              ) : (
                                <div className="col-12 col-md-6 col-lg-3">
                                  <div
                                    className="card mt-3"
                                    style={{
                                      width: "16rem",
                                      maxHeight: "360px",
                                    }}
                                  >
                                    <img
                                      src={arrayData.img}
                                      className="card-img-top"
                                      alt="..."
                                      style={{
                                        height: "120px",
                                        objectFit: "fill",
                                      }}
                                    />
                                    <div className="card-body">
                                      <h5 className="card-title">
                                        {arrayData.name}
                                      </h5>
                                      <div
                                        className="container w-100 p-0"
                                        style={{ height: "38px" }}
                                      >
                                        <span className="m-1">
                                          {arrayData.qty}
                                        </span>
                                        <span className="m-1">
                                          {arrayData.size}
                                        </span>
                                        <span className="m-1">
                                          {arrayData.Order_date}
                                        </span>
                                        <div className="d-inline ms-2 h-100 w-20 fs-5">
                                          ₹{arrayData.price}/-
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )
                );
              })
            : "No data"}
        </div>
      </div>

      <Footer />
    </div>
  );
}
