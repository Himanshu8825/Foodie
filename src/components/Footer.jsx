import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter className="text-white text-center text-lg-left bg-info mt-4">
      <MDBContainer classnameName="p-4">
        <MDBRow>
          <MDBCol lg="6" md="12" classnameName="mb-4 mb-md-0">
            <h5 classnameName="text-uppercase">Footer Content</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur maxime quis culpa
              corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" classnameName="mb-4 mb-md-0">
            <h5 classnameName="text-uppercase">Links</h5>

            <ul classnameName="list-unstyled mb-0">
              <li>
                <a href="#!" classnameName="text-white">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" classnameName="text-white">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" classnameName="text-white">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" classnameName="text-white">
                  Link 4
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" classnameName="mb-4 mb-md-0">
            <h5 classnameName="text-uppercase mb-0">Links</h5>

            <ul classnameName="list-unstyled">
              <li>
                <a href="#!" classnameName="text-white">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" classnameName="text-white">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" classnameName="text-white">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" classnameName="text-white">
                  Link 4
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        classnameName="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a classnameName="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}
