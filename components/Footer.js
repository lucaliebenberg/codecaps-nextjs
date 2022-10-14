import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <MDBFooter
      className="text-center text-lg-start text-muted pt-3 pb-5"
      style={{ backgroundColor: "#141B25", color: "white" }}
    >
      <section className="text-white justify-content-center">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3 pe-3">
            <MDBCol className="mx-auto mb-2">
              <div>
                <img
                  src="https://i.ibb.co/HTLZ6yY/Code-Capsules-logo-dark-Mode.png"
                  alt="Code Capsules logo"
                  style={{
                    objectFit: "none",
                    paddingBottom: "3rem",
                  }}
                />
              </div>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Menu</h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Home
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Solutions
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Technology
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Pricing
                </a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Resources</h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Tutorials
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Docs
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  FAQs
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">About</h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Company
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Privacy & Policy
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  T's & C's
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Company</h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Features
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Security
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Business
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Case Studies
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Resources
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="d-flex text-white w-100 h-100 justify-content-center pt-3">
        <a href="#" className="text-decoration-none text-white">
          <FaTwitter className="ms-2 fs-3 pt-1" />
        </a>
        <a href="#" className="text-decoration-none text-white">
          <FaFacebook className="ms-2 fs-3 pt-1" />
        </a>
        <a href="#" className="text-decoration-none text-white">
          <FaLinkedin className="ms-2 fs-3 pt-1" />
        </a>
        <a href="#" className="text-decoration-none text-white">
          <FaGithub className="ms-2 fs-3 pt-1" />
        </a>
      </div>
      <div className="text-center p-5" style={{ backgroundColor: "#141B25" }}>
        © 2021 Copyright:
        <a
          className="text-reset fw-bold text-decoration-none"
          href="https://mdbootstrap.com/"
        >
          &nbsp;CodeCapsules.io
        </a>
      </div>
    </MDBFooter>
  );
}
