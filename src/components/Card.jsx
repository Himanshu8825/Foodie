import React, { useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import { useDispatchCart, useCart } from "./ContextReducer";
import { useState } from "react";

const Cards = (props) => {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options;
  let priceOption = Object.keys(options);
  // let foodItem = props.foodItems;

  const [Qty, setQty] = useState(1);
  const [size, setsize] = useState("");

  const handledToCart = async () => {
    // Find the item with the same ID in the cart
    const existingItem = data.find((item) => item.id === props.foodItem._id);

    if (existingItem) {
      if (existingItem.size === size) {
        // Update the quantity and price if the size matches
        await dispatch({
          type: "UPDATE",
          id: props.foodItem._id,
          price: finalPrice,
          Qty: Qty,
        });
      } else {
        // Add a new item with a different size
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          Qty: Qty,
          size: size,
          img: props.ImgSrc, // You can add other properties here if needed
        });
      }
    } else {
      // Add a new item to the cart if it doesn't exist
      await dispatch({
        type: "ADD",
        id: props.foodItem._id,
        name: props.foodItem.name,
        price: finalPrice,
        Qty: Qty,
        size: size,
        img: props.ImgSrc, // You can add other properties here if needed
      });
    }

  };

  let finalPrice = Qty * parseInt(options[size]);
  useEffect(() => {
    setsize(priceRef.current.value);
  }, []);
  return (
    <>
      <Card
        style={{ width: "18rem", maxHeight: "360px" }}
        className="card mt-4 "
      >
        <Card.Img
          variant="top"
          src={props.foodItem.img}
          style={{ height: "150px", objectFit: "fill" }}
          className="card-img-top"
        />
        <Card.Body className="card-body">
          <Card.Title>
            <h5 className="card-title">{props.foodItem.name}</h5>
          </Card.Title>
          <div classnamenameName="container w-100">
            <select
              className="bg-info h-100 rounded m-2 text-white fw-bold border-0"
              onChange={(e) => {
                setQty(e.target.value);
              }}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {" "}
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="bg-info h-100 rounded m-2 text-white fw-bold border-0"
              ref={priceRef}
              onChange={(e) => {
                setsize(e.target.value);
              }}
            >
              {priceOption.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>

            <div className="d-inline fs-5 h-100 font-weight: 9000;">
              ₹{finalPrice}/-
            </div>
            <hr />
            <button
              className=" ms-2 btn btn-info justify-center text-white fw-bold"
              onClick={handledToCart}
            >
              Add To Cart
            </button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
