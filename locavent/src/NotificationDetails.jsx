import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBars, FaBell } from 'react-icons/fa';

const NotificationDetails = () => {
  return (
    <Container fluid className="p-3" style={{ backgroundColor: '#F8F9FA', minHeight: '100vh' }}>
      {/* Row 1: Header with Menu and Notification icons */}
      <Row className="align-items-center mb-2">
        <Col xs={2} className="text-start">
          <Link to="/menu">
            <FaBars size={22} color="black" />
          </Link>
        </Col>
        <Col xs={8}></Col>
        <Col xs={2} className="text-end">
          <Link to="/notifications">
            <FaBell size={22} color="black" />
          </Link>
        </Col>
      </Row>
      <br/>
      {/* Row 2: Title */}
      <Row className="mb-4">
        <Col className="text-center">
          <h1 style={{ color: '#7A3EAB', fontWeight: 'bold', margin: 0 , textAlign: 'left' }}>Notification</h1>
        </Col>
      </Row>

      {/* Row 3: Notification title and time */}
      <Row className="align-items-center mb-2">
        <Col xs={8}>
          <h6 className="m-0" style={{ fontWeight: 'bold' }}>RSVP Confirmed</h6>
        </Col>
        <Col xs={4} className="text-end text-muted" style={{ fontSize: '12px' }}>
          9:41 AM
        </Col>
      </Row>

      {/* Row 4: Event Image */}
      <Row className="mb-3">
        <Col>
          <img
            src="/Images/ColdPlay Event.png" // Replace with actual image URL if available
            alt="Event"
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </Col>
      </Row>

      {/* Row 5: Notification text */}
      <Row className="mb-4">
        <Col>
          <p style={{ textAlign: 'center', fontSize: '14px', color: '#555' }}>
            Congratulations, your spot at Coldplay’s Music of the Spheres concert is confirmed! Get ready for an unforgettable evening filled with incredible music, mesmerizing visuals, and the chance to experience one of the world’s most iconic bands live. Make sure to mark the date and prepare for an epic performance!
          </p>
        </Col>
      </Row>

      {/* Row 6: Back Button */}
      <Row>
        <Col className="text-center">
          <Link to="/notifications">
            <Button variant="dark">Back</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotificationDetails;
