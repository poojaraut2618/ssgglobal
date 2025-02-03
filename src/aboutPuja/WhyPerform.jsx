import React from 'react'
import headingIcon from "../assets/icon.png"; 
import { Container, Row, Col, Button } from "react-bootstrap";

export default function WhyPerform() {
  return (
    <Container fluid="md">
      <div className="text-center mb-4">
        <div className="d-flex align-items-center justify-content-center gap-4">
          <img src={headingIcon} className="h-10 md:h-10" alt="Icon Left" /> {/* Left Icon */}
          <h2 className="text-3xl md:text-4xl fw-bold primaryColor">
            Why Perform the Ashtalakshmi Puja?
          </h2>
          <img src={headingIcon} className="h-10 md:h-10" alt="Icon Right" /> {/* Right Icon */}
        </div>
      </div>

      {/* Benefits List */}
      <Row className="justify-content-center">
        <Col md={8} sm={10} xs={12}>
          <ul className="text-start mx-auto list-disc" style={{ maxWidth: "600px", lineHeight: "1.8" }}>
            <li>Removes financial obstacles and promotes prosperity.</li>
            <li>Enhances spiritual growth and inner peace.</li>
            <li>Invokes blessings for family harmony and health.</li>
            <li>Ensures success in personal and professional endeavors.</li>
            <li>Brings peace, positivity, and divine energy into your life.</li>
          </ul>
        </Col>
      </Row>

      
    </Container>
  );
}
