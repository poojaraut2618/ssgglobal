import React, { useState, useEffect } from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // For linking to the blog details page
import { FaArrowRight } from "react-icons/fa";
import headingIcon from "../assets/icon.png";

const BlogSlider = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      name: "Spiritual Awakening",
      description: "A guide to spiritual awakening and meditation practices.",
      image: "https://t4.ftcdn.net/jpg/07/13/93/47/360_F_713934704_N0qax4vxqngR873Z3NlvXL22g84h2taq.jpg",
      slug: "spiritual-awakening",
    },
    {
      id: 2,
      name: "Puja and Rituals",
      description: "An introduction to various pujas and their significance.",
      image: "https://t4.ftcdn.net/jpg/07/13/93/47/360_F_713934704_N0qax4vxqngR873Z3NlvXL22g84h2taq.jpg",
      slug: "puja-and-rituals",
    },
    {
      id: 3,
      name: "The Power of Mantras",
      description: "Exploring the power and significance of mantras in daily life.",
      image: "https://t4.ftcdn.net/jpg/07/13/93/47/360_F_713934704_N0qax4vxqngR873Z3NlvXL22g84h2taq.jpg",
      slug: "the-power-of-mantras",
    },
    {
      id: 4,
      name: "Meditation Techniques",
      description: "Different techniques for effective meditation and mindfulness.",
      image: "https://t4.ftcdn.net/jpg/07/13/93/47/360_F_713934704_N0qax4vxqngR873Z3NlvXL22g84h2taq.jpg",
      slug: "meditation-techniques",
    },
    
  ]);

  return (
    <Container>
      <div className="text-center mb-4 mt-8">
        <div className="d-flex align-items-center justify-content-center gap-4">
          <img src={headingIcon} className="h-10 md:h-10 " alt="Icon Left" />{" "}
          {/* Left Icon */}
          <h2 className="text-3xl md:text-4xl fw-bold primaryColor">
          What Our Devotees Say
          </h2>
          <img src={headingIcon} className="h-10 md:h-10" alt="Icon Right" />{" "}
          {/* Right Icon */}
        </div>
      </div>

      <Carousel
        interval={3000} // Set interval for slide transition (3 seconds)
        wrap={true} // Enable infinite loop
        slide={true} // Enable sliding effect
        nextIcon={<span className="carousel-control-next-icon" />} // Next icon
        prevIcon={<span className="carousel-control-prev-icon" />} // Previous icon
        indicators={false} // Hide indicators
        controls={true} // Show carousel controls
      >
        {/* Loop through blogs and display 2 per slide */}
        {blogs.length > 0 &&
          blogs
            .reduce((acc, blog, index) => {
              if (index % 2 === 0) acc.push(blogs.slice(index, index + 2)); // 2 blogs per slide
              return acc;
            }, [])
            .map((group, index) => (
              <Carousel.Item key={index}>
                <Row>
                  {group.map((blog) => (
                    <Col key={blog.id} md={6}>
                      <Card className="blog-card border-0 text-center" style={{backgroundColor: '#fffff0'}}>
                        <Card.Img variant="top" src={blog.image} alt={blog.name} style={{height: '100px', width: '100px', borderRadius: '50px', margin: 'auto'}}/>
                        <Card.Body>
                          <Card.Title>{blog.name}</Card.Title>
                          <Card.Text>
                            {blog.description.length > 50
                              ? `${blog.description.substring(0, 50)}...`
                              : blog.description}
                          </Card.Text>
                          <div className="text-right">

                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
      </Carousel>
    </Container>
  );
};

export default BlogSlider;
