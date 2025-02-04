import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import headingIcon from "../assets/icon.png"; 
import AOS from "aos";
import "aos/dist/aos.css";
import  { useEffect } from "react";

const BlessingsGrid = () => {

   useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  const blessings = [
    {
      img: "src/assets/ph_flower-lotus-light.png", 
      title: "Adi Lakshmi:",
      description: "Bestows eternal wealth and spiritual strength.",
    },
    {
      img: "src/assets/ph_coins-light.png",
      title: "Dhana Lakshmi:",
      description: "Brings financial abundance and prosperity.",
    },
    {
      img: "src/assets/fluent_food-grains-20-regular.png",
      title: "Dhanya Lakshmi:",
      description: "Blesses agricultural bounty and nourishment.",
    },
    {
      img: "src/assets/emojione-monotone_elephant.png",
      title: "Gaja Lakshmi:",
      description: "Grants royal power, success, and prestige.",
    },
    {
      img: "src/assets/Group 25.png",
      title: "Santana Lakshmi:",
      description: "Blesses with offspring and family harmony.",
    },
    {
      img: "src/assets/Group 30.png",
      title: "Veera Lakshmi:",
      description: "Offers courage, strength, and resilience.",
    },
    {
      img: "src/assets/fluent-emoji-high-contrast_open-book.png",
      title: "Vidya Lakshmi",
      description: "Embodies knowledge, wisdom, and education.",
    },
    {
      img: "src/assets/et_flag.png",
      title: "Vijaya Lakshmi:",
      description: "Ensures victory and success in endeavors.",
    },
  ];

  return (
    <Container className="p">
      {/* Heading Section */}
      <div className="text-center mb-4 py-4">
        <div className="d-flex align-items-center justify-content-center gap-4">
          <img src={headingIcon} className="h-10 md:h-10" alt="Icon Left" /> {/* Left Icon */}
          <h2 className="text-3xl md:text-4xl fw-bold primaryColor">The Blessings of the Ashtalakshmi</h2>
          <img src={headingIcon} className="h-10 md:h-10" alt="Icon Right" /> {/* Right Icon */}
        </div>
      </div>

      {/* Blessings Grid */}
      <Row>
        {blessings.map((blessing, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card  data-aos="flip-left"  className="text-center border-0" style={{ backgroundColor: "#FFFFF0", padding: "10px" }}>
              <Card.Img
              
                variant="top"
                src={blessing.img}
                alt={blessing.title}
                className="mx-auto"
                style={{ width: "50px", height: "50px" }}
              />
              <Card.Body>
                <p className="primaryColor text-xl font-semibold">{blessing.title}</p>
                <p  className=" text-lg">{blessing.description}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlessingsGrid;
