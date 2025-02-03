import React from 'react'
import headingIcon from "../assets/icon.png"; 
import { Container, Row, Col, Card } from "react-bootstrap";
import Contact from "../assets/contact.png"
import Email from "../assets/email.png"
import Location from "../assets/location.png"
export default function GetInTouch() {
  return (
    <Container className="mt-5">
      <Card className="text-center p-4 "  style={{ border: "0"}}>
      <div className="text-center mb-4 mt-8">
                <div className="d-flex align-items-center justify-content-center gap-4">
                  <img src={headingIcon} className="h-10 md:h-10" alt="Icon Left" /> {/* Left Icon */}
                  <h2 className="text-3xl md:text-4xl fw-bold primaryColor">Get In Touch</h2>
                  <img src={headingIcon} className="h-10 md:h-10" alt="Icon Right" /> {/* Right Icon */}
                </div>
              </div>
              <Row className="mb-4">
  <Col md={4} className="d-flex flex-column align-items-center">
    <div style={{ backgroundColor: "#FFFFF0"}}><img src={Contact} className="h-9 md:h-9 mb-2" alt="Icon Right" /></div>
    <p style={{ backgroundColor: "#FFFFF0", paddingLeft: "50px", paddingRight: "50px" }}>+91-12345 12345</p>
  </Col>
  <Col md={4} className="d-flex flex-column align-items-center">
    <div style={{ backgroundColor: "#FFFFF0" }}><img src={Email} className="h-9 md:h-9 mb-2" alt="Icon Right" /></div>
    <p style={{ backgroundColor: "#FFFFF0", paddingLeft: "50px", paddingRight: "50px" }}>loremipsum@gmail.com</p>
  </Col>
  <Col md={4} className="d-flex flex-column align-items-center">
   <div style={{ backgroundColor: "#FFFFF0" }}><img src={Location} className="h-9 md:h-9 mb-2" alt="Icon Right" /></div>
    <p style={{ backgroundColor: "#FFFFF0", paddingLeft: "50px", paddingRight: "50px"}}>City, State, Country - 123456</p>
  </Col>
</Row>

        <div className="map-container" style={{ height: "300px", overflow: "hidden", borderRadius: "10px" }}>
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097077!2d144.95373531531596!3d-37.81627974202192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1634027562341!5m2!1sen!2sin"
            allowFullScreen
          ></iframe>
        </div>
      </Card>
    </Container>

  )
}
