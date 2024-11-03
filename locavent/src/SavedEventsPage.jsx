// SavedEventsPage.jsx
import React from 'react';
import './SavedEventsPage.css';
import { Row, Col, Card, Form, InputGroup } from 'react-bootstrap';
import { FaHeart, FaFilter, FaBars, FaBell, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SavedEventsPage = () => {
  const navigate = useNavigate();

  const events = [
    {
      title: "Coldplay : Music of the Spheres",
      location: "Gelora Bung Karno Stadium",
      date: "November 15 2023",
      price: "RM 500",
      image: "/Images/ColdPlay Event.png", // Replace with actual image URL
    },
    {
      title: "Coldplay : Music of the Spheres",
      location: "Gelora Bung Karno Stadium",
      date: "November 15 2023",
      price: "RM 250",
      image: "/Images/Muse Event Big.png", // Replace with actual image URL
    },
  ];

  return (
    <div className="saved-events-page">
      {/* Row 1: Menu and Notification Icons */}
      <Row className="align-items-center justify-content-between mb-3 header-row">
        <Col xs="auto">
          <FaBars className="menu-icon" onClick={() => navigate("/menu")} />
        </Col>
        <Col xs="auto">
          <FaBell className="notification-icon" />
        </Col>
      </Row>

      {/* Row 2: Title */}
      <Row className="mb-3">
        <Col>
          <h1 className="title">LocaVent</h1>
        </Col>
      </Row>

      {/* Row 3: Search Bar */}
      <InputGroup className="mb-4 search-bar">
        <Form.Control
          placeholder="Search event.."
          aria-label="Search event"
        />
        <InputGroup.Text>
          <FaFilter />
        </InputGroup.Text>
      </InputGroup>

      {/* Row 4: Section Title */}
      <h5 className="section-title">Saved Events</h5>

      {/* Rows 5 & 6: Event Cards */}
      <Row className="event-list">
        {events.map((event, index) => (
          <Col key={index} xs={12} className="mb-3">
            <Card className="event-card">
              <Card.Img variant="top" src={event.image} />
              <Card.ImgOverlay className="overlay">
                <div className="overlay-content">
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>
                    <FaMapMarkerAlt /> {event.location}
                  </Card.Text>
                  <Card.Text>{event.date}</Card.Text>
                  <Card.Text className="price">Start from {event.price}</Card.Text>
                </div>
                <div className="heart-icon">
                  <FaHeart />
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SavedEventsPage;
