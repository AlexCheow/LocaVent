import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Authentication.css'; // Import the custom CSS for animation

const Authentication = () => {
  const navigate = useNavigate();

  // Redirect to the target page after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/tickets'); // Replace with the desired target page
    }, 10000); // 10 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigate]);

  return (
    <Container fluid className="authentication-container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Row>
        <Col className="text-center">
          <h2 className="authentication-text">Authentication ...</h2>
          
          <div className="loader"></div> {/* Animated loader */}
          <br/>
          <p className="please-wait-text">Please wait a while...</p> 
        </Col>
      </Row>
    </Container>
  );
};

export default Authentication;
