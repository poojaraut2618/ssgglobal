import React, { useState, useEffect } from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // For linking to the blog details page
import { FaArrowRight } from "react-icons/fa";
import headingIcon from "../assets/icon.png";

const BlogSlider = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blog data from the JSON file
  useEffect(() => {
    fetch("/Blogs.json") // Path to the JSON file in public folder
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => {
        setBlogs(data); // Update the blogs state with fetched data
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <Container>
      <div className="text-center mb-4 mt-8">
        <div className="d-flex align-items-center justify-content-center gap-4">
          <img src={headingIcon} className="h-10 md:h-10" alt="Icon Left" />{" "}
          {/* Left Icon */}
          <h2 className="text-3xl md:text-4xl fw-bold primaryColor">
          Spiritual Insights & Puja Guides
          </h2>
          <img src={headingIcon} className="h-10 md:h-10" alt="Icon Right" />{" "}
          {/* Right Icon */}
        </div>
      </div>

      <Carousel
        interval={5000} // Set interval for slide transition (5 seconds)
        wrap={true} // Enable infinite loop
        slide={true} // Enable sliding effect
        nextIcon={<span className="carousel-control-next-icon" />} // Next icon
        prevIcon={<span className="carousel-control-prev-icon" />} // Previous icon
        indicators={false} // Hide indicators
        controls={true} // Show carousel controls
      >
        {/* Loop through blogs and display 3 per slide */}
        {blogs.length > 0 &&
          blogs
            .reduce((acc, blog, index) => {
              if (index % 3 === 0) acc.push(blogs.slice(index, index + 3));
              return acc;
            }, [])
            .map((group, index) => (
              <Carousel.Item key={index}>
                <Row>
                  {group.map((blog) => (
                    <Col key={blog.id} md={4}>
                      <Card className="blog-card border-0">
                        <Card.Img
                          variant="top"
                          src={blog.image}
                          alt={blog.name}
                        />
                        <Card.Body>
                          <Card.Title>{blog.name}</Card.Title>
                          <Card.Text>
                            {blog.description.length > 50
                              ? `${blog.description.substring(0, 50)}...`
                              : blog.description}
                          </Card.Text>
                          <div className="text-right">
                            <Link to={`/blog/${blog.slug}`}>
                              <Button
                                variant="link"
                                className="mt-auto read-more-btn align-self-end d-flex align-items-center"
                              >
                                Read More <FaArrowRight className="ml-2" />
                              </Button>
                            </Link>
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
