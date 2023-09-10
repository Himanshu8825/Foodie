import React from "react";
import Delete from "@material-ui/icons/Delete";
import { useCart, useDispatchCart } from "../components/ContextReducer";
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center text-white fs-3">
          The Cart is Empty!
        </div>
      </div>
    );
  }
  // const handleRemove = (index)=>{
  //   console.log(index)
  //   dispatch({type:"REMOVE",index:index})
  // }

  const handleCheckOut = async () => {
    try {
      let userEmail = localStorage.getItem("userEmail");

      const response = await fetch("http://localhost:5001/api/orderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order_data: data,
          email: userEmail,
          order_date: new Date().toDateString(),
        }),
      });

      if (response.status === 200) {
        // Request was successful, dispatch your action here
        dispatch({ type: "DROP" });
      } else {
        // Handle non-successful response status codes here
        console.error("Request failed with status:", response.status);
        // You might want to throw an error or handle this in some way
      }
    } catch (error) {
      // Handle network errors here
      console.error("Network error:", error);
    }
  };


  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <div>
      {console.log(data)}
      <div className="container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md">
        <table className="table table-hover ">
          <thead className=" text-success fs-4  ">
            <tr>
              <th scope="col" className="text-info">
                #
              </th>
              <th scope="col" className="text-info">
                Name
              </th>
              <th scope="col" className="text-info">
                Quantity
              </th>
              <th scope="col" className="text-info">
                Option
              </th>
              <th scope="col" className="text-info">
                Amount
              </th>
              <th scope="col" className="text-info"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td className="color">{food.name}</td>
                <td className="color">{food.Qty}</td>
                <td className="color">{food.size}</td>
                <td className="color">{food.price}</td>
                <td>
                  <button type="button" className="btn p-0 text-info">
                    <Delete
                      onClick={() => {
                        dispatch({ type: "REMOVE", index: index });
                      }}
                    />
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="fs-2 text-info">Total Price: {totalPrice}/-</h1>
        </div>
        <div>
          <button className="btn bg-info mt-5  color " onClick={handleCheckOut}>
            {" "}
            Check Out{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
