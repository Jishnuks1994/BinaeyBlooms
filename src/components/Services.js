import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Services() {
  return (
    <div>
      <h2 className=" text-center py-3">Our Services</h2>

      <Container className="mt-3">
        <Row className="mt-3">
          <Col className="text-center" lg={8} md={8} sm={6}>
            <img
              src="https://i.postimg.cc/mgZJWfKn/8a5390085610edea8fca284a6ca3f228-removebg-preview.png"
              alt=""
              className="img-fluid"
            />
          </Col>
          <Col lg={4} md={4} sm={6}>
            <h2 style={{ color: "skyblue" }}>Customer Support System</h2>
            <p className="fs-4">
              Our 24/7 Customer Support guarantees prompt, personalized
              assistance through various channels. Explore success stories to
              witness our commitment to reliability, user-friendly interfaces,
              and customer satisfaction.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={4} md={4} sm={6}>
            <h2 style={{ color: "skyblue" }}>Customer Management System</h2>
            <p className="fs-4">
              Our Customer Management System optimizes client interactions,
              streamlining data for personalized service. It ensures efficient
              communication, data analysis, and enhanced customer relationships,
              fostering business growth and satisfaction.
            </p>
          </Col>
          <Col className="text-center" lg={8} md={8} sm={6}>
            <img
              src="https://i.postimg.cc/TwCqm1Rj/pngtree-customer-service-illustration-concept-png-image-1567934-removebg-preview.png"
              alt=""
              className="img-fluid"
            />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="text-center" lg={8} md={8} sm={6}>
            <img
              src="https://i.postimg.cc/qMyRNYBQ/63-633480-onsite-ict-support-help-desk-ticketing-system-icon-removebg-preview.png"
              alt=""
              className="img-fluid"
            />
          </Col>
          <Col lg={4} md={4} sm={6}>
            <h2 style={{ color: "skyblue" }}>Ticketing System</h2>
            <p className="fs-4">
              Our Ticketing System simplifies issue resolution, providing a
              centralized platform for efficient communication and tracking.
              Streamline support, enhance collaboration, and prioritize tasks
              for swift resolution and improved customer satisfaction.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={4} md={4} sm={6}>
            <h2 style={{ color: "skyblue" }}>Other Minimum Viable Products</h2>
            <p className="fs-4">
              Launch quickly with essential tools like a project manager,
              e-commerce platform, social media scheduler, CRM Lite, and more.
              Streamline processes, focusing on core features for efficient
              functionality.
            </p>
          </Col>
          <Col className="text-center" lg={8} md={8} sm={6}>
            <img
              src="https://i.postimg.cc/Mp3NhGLw/software-development-1024x683-removebg-preview.png"
              alt=""
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
