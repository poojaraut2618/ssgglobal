import React from 'react';
import headingIcon from "../assets/icon.png"; // Import an icon (you can change it)
import aboutImg3 from "../assets/about3.png";
import { Container, Image, ListGroup, Button   } from "react-bootstrap";


const Puja = () => {
  return (
    <>
      <section className="container mx-auto px-6 py-12">
        {/* Heading with Icons */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4">
            <img src={headingIcon} className="h-10" /> {/* Left Icon */}
            <h2 className="fw-bold text-4xl primaryColor font-heading">The Ashtalakshmi Puja</h2>
            <img src={headingIcon} className="h-10" /> {/* Right Icon */}
          </div>
        </div>

        {/* New Section with Image and Content */}
        <Container>
        <div className="d-flex flex-column flex-md-row align-items-center gap-4">
          {/* Left Column - Image */}
          <div className="w-100 w-md-50">
            <Image src={aboutImg3} alt="Puja" className="w-100 h-[550px] rounded shadow-md" />
          </div>
  
          {/* Right Column - Content */}
          <div className="w-100 w-md-50">
            <p className="text-lg text-dark">
              The Ashtalakshmi Puja is a powerful Vedic ritual that invokes the blessings of the eight forms of Goddess Lakshmi, the deity of wealth, prosperity, and well-being. Each form represents a unique aspect of life, such as knowledge, strength, abundance, and victory. By performing this puja, devotees invite holistic blessings into their lives.
            </p>
            
            <Container>
            <p className="text-lg primaryColor font-bold"> Eight Forms of Lakshmi :</p>
      <ListGroup as="ol" numbered>
        <ListGroup.Item as="li" className="border-0">
          <strong>Adi Lakshmi</strong> – The primal energy, representing eternal wealth and strength.
        </ListGroup.Item>
        <ListGroup.Item as="li" className="border-0">
          <strong>Dhana Lakshmi</strong> – The goddess of material wealth and financial stability.
        </ListGroup.Item>
        <ListGroup.Item as="li" className="border-0">
          <strong>Dhanya Lakshmi</strong> – The harbinger of agricultural prosperity and nourishment.
        </ListGroup.Item>
        <ListGroup.Item as="li" className="border-0">
          <strong>Gaja Lakshmi</strong> – The symbol of royalty, power, and grandeur.
        </ListGroup.Item>
      </ListGroup>
    </Container>
            
    <Button variant="link" className="secondaryColor fw-bold  text-decoration-none">
      Read More <span className="ms-1 primaryColor">&raquo;</span>
    </Button>
          </div>
        </div>
      </Container>

      </section>
    </>
  );
};

export default Puja;
