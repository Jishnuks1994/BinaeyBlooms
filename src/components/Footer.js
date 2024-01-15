import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <div className="bg-body-secondary py-3 ">
        <Container>
          <Row>
            <Col lg={6}>
              <h1>Binary Blooms</h1>
            </Col>
            <Col lg={3}>
              <div>
                <h4>About Binary Blooms</h4>
                <a href="#" className=" link-dark link-underline-opacity-0">
                  Careers
                </a>
                <br />
                <a href="#" className=" link-dark link-underline-opacity-0">
                  News
                </a>
                <br />
                <a href="#" className=" link-dark link-underline-opacity-0">
                  Brand
                </a>
                <br />
                <a href="#" className=" link-dark link-underline-opacity-0">
                  Culture
                </a>
                <br />
              </div>
            </Col>

            <Col lg={3}>
              <div>
                <h4>Multi-Platform</h4>
                <a href="#" className=" link-dark link-underline-opacity-0">
                  Mobile
                </a>
                <br />
                <a href="#" className=" link-dark link-underline-opacity-0">
                  Web
                </a>
                <br />
                <a href="#" className=" link-dark link-underline-opacity-0">
                  Desktop
                </a>
                <br />
                <a href="#" className=" link-dark link-underline-opacity-0">
                  Embedded
                </a>
                <br />
                <a href="#" className=" link-dark link-underline-opacity-0">
                  iOS
                </a>
                <br />
              </div>
            </Col>
          </Row>

          <div className="mt-5 pb-5">
            <i
              class="fa-brands fa-youtube fa-2xl me-2"
              style={{ color: "grey" }}
            ></i>
            <i
              class="fa-brands fa-x-twitter fa-2xl me-2"
              style={{ color: "grey" }}
            ></i>
            <i
              class="fa-brands fa-github fa-2xl me-2"
              style={{ color: "grey" }}
            ></i>
            <i
              class="fa-brands fa-instagram fa-2xl me-2"
              style={{ color: "grey" }}
            ></i>
            <i
              class="fa-brands fa-whatsapp fa-2xl me-2"
              style={{ color: "grey" }}
            ></i>
            <i
              class="fa-brands fa-linkedin fa-2xl me-2 "
              style={{ color: "grey" }}
            ></i>
          </div>
          <hr />
          <div>
            <Row className="me-auto flex text-center">
              <Col lg={9} md={12} sm={12}>
                <p>
                  Except as otherwise noted, this work is licensed under a
                  Creative Commons Attribution 4.0 International License, and
                  code samples are licensed under the BSD License.
                </p>
              </Col>
              <Col>
              <a href="#" className=" link-dark link-underline-opacity-0 me-3">Terms</a>
              <a href="#" className=" link-dark link-underline-opacity-0 me-3">Privacy</a>
              <a href="#" className=" link-dark link-underline-opacity-0 me-3">Security</a>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
