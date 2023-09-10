import React from "react";
import { Badge } from "react-bootstrap";
// import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";

import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";

const NavbarComponent = (props) => {
  const [CartView, setCartView] = useState(false);
  let data = useCart();

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <>
      <Navbar classnamenameName="yellotail">
        <LinkContainer to={"/"}>
          <Navbar.Brand className="yellotail fs-1">Foodie</Navbar.Brand>
        </LinkContainer>
      </Navbar>
      <Nav>
        <Nav.Item className="m-auto  margince ">
          <LinkContainer to={"/"}>
            <Nav.Link className="fs-5 active ">Home</Nav.Link>
          </LinkContainer>

          {localStorage.getItem("authToken") ? (
            <LinkContainer to={"/myOrder"}>
              <Nav.Link className="fs-5  ">My Order</Nav.Link>
            </LinkContainer>
          ) : (
            ""
          )}
        </Nav.Item>

        {!localStorage.getItem("authToken") ? (
          <div className=" d-flex ">
            <Nav.Item>
              <LinkContainer to={"/login"}>
                <Nav.Link className="btn bg-info text-white m-2 fs-6">
                  Log-In
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to={"/signup"}>
                <Nav.Link className="btn bg-info text-white m-2 fs-6">
                  Sign-Up
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </div>
        ) : (
          <div className="d-flex">
            <Nav.Link
              className="btn bg-info text-white m-2"
              onClick={() => {
                setCartView(true);
              }}
            >
              My Cart{" "}
              <Badge pill bg="danger">
                {data.length}
              </Badge>
            </Nav.Link>

            {CartView ? (
              <Modal onClose={() => setCartView(false)}>
                <Cart></Cart>
              </Modal>
            ) : (
              ""
            )}

            <Nav.Link
              className="btn bg-danger text-white m-2"
              onClick={handleLogOut}
            >
              Log Out
            </Nav.Link>
          </div>
        )}
      </Nav>
    </>
  );
};
// LinkContainer is used to stop reloading of react page

export default NavbarComponent;
