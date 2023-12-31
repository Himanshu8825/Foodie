import React from "react";
import { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";


function App() {

  const [credentials, setcredentials] = useState({ name: "", email: "", pass: "", Geolocation: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:5001/api/creatuser", {
      method: "POSt",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, pass: credentials.pass, location: credentials.Geolocation })
    });

    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials");
    }
  }

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <form onSubmit={handleSubmit}>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody >
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p className="yellotail fs-1 text-center fs-1 mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>

                <div className="d-flex flex-row align-items-center mb-4">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" name="name" value={credentials.name} onChange={onChange} />
                </div>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="email" value={credentials.email} onChange={onChange} />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="pass" value={credentials.pass} onChange={onChange} />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <Form.Label>Location</Form.Label>
                  <Form.Control type="password" placeholder="Address" name="Geolocation" value={credentials.Geolocation} onChange={onChange} />
                </div>

                <button className="btn btn-info m-3 ">Register</button>
                <Link to={'/login'} className="btn btn-primary ">Already A User</Link>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </form>
  );
}

export default App;
