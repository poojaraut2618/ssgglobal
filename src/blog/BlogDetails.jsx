import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { Container, Card, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";


const BlogDetails = () => {
  const { slug } = useParams(); 
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch('/Blogs.json')
      .then((response) => response.json())
      .then((data) => {
       
        const selectedBlog = data.find((blog) => blog.slug === slug);
        setBlog(selectedBlog); 
      })
      .catch((error) => console.error('Fetch error:', error));
  }, [slug]); 

  return (
    <Container className="mt-5 ">
      {blog ? (
        <Card className="border-0">
          <Card.Img variant="top" src={blog.image} alt={blog.name} />
          <Card.Body>
          <Card.Title>{blog.name}</Card.Title>
            <Card.Text>{blog.description}</Card.Text>
            <Button variant="link" href="/blog" className="d-flex align-items-center">
              <FaArrowLeft className="mr-2" /> Back to Blogs
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default BlogDetails;