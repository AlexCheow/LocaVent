// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaBars, FaBell, FaSearch } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Row className="align-items-center justify-content-between mb-3">
        <Col xs="auto">
          {/* Use Link to navigate to /menu when the menu icon is clicked */}
          <Link to="/menu">
            <FaBars className="icon" />
          </Link>
        </Col>
        <Col xs="auto">
          {/* Link to notifications page */}
          <Link to="/notifications">
            <FaBell className="icon" />
          </Link>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 className="title">Find</h2>
          <h3 className="title">Trending Events</h3>
        </Col>
      </Row>

      <Row className="mt-3 mb-3">
        <Col>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search event.." className="search-input" />
            <Button variant="outline-secondary" className="search-button">
              <FaSearch />
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="category-row mb-3">
        <Col className="text-center category">Music Concert</Col>
        <Col className="text-center category">Exhibition</Col>
        <Col className="text-center category">Stand Up Show</Col>
      </Row>

      <Row className="align-items-center justify-content-between">
        <Col><h5>Trending Events</h5></Col>
        <Col xs="auto"><Link className="see-all" to="/events">See all</Link></Col>
      </Row>

      {/* Coldplay Event Card with Link to Event Details */}
      <Row className="trending-event mb-4">
        <Col>
          <Link to="/event/1" className="event-link"> {/* Link to EventDetailsPage */}
            <Card className="trending-event-card">
              <Card.Img src="/Images/ColdPlay Event.png" alt="Trending Event" />
              <Card.ImgOverlay className="trending-event-overlay">
                <Card.Title>Coldplay : Music of the Spheres</Card.Title>
                <Card.Text>Gelora Bung Karno Stadium</Card.Text>
                <Card.Text>November 15, 2023</Card.Text>
                <Card.Text className="price">Start from RM 500</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </Col>
      </Row>

      <Row className="align-items-center justify-content-between">
        <Col><h5>Events Near You</h5></Col>
        <Col xs="auto"><Link className="see-all" to="/nearby-events">See all</Link></Col>
      </Row>

      <Row className="event-cards mb-4">
        <Col>
          <Card className="event-card">
            <Card.Img variant="top" src="/Images/Muse Event.png" alt="Muse Event" />
            <Card.Body>
              <Card.Title>Muse : Will of the People</Card.Title>
              <Card.Text>KL, Malaysia</Card.Text>
              <Card.Text className="price">RM 250</Card.Text>
              <Card.Text>July 23, 2023</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="event-card">
            <Card.Img variant="top" src="/Images/One Direction Event.png" alt="One Direction Event" />
            <Card.Body>
              <Card.Title>One Direction : Where We Are</Card.Title>
              <Card.Text>KL, Malaysia</Card.Text>
              <Card.Text className="price">RM 780</Card.Text>
              <Card.Text>Oct 29, 2023</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
