import React from 'react';
import './MyTicketsPage.css';
import { Row, Col, Card, Form, InputGroup } from 'react-bootstrap';
import { FaBars, FaBell, FaSearch, FaMapMarkerAlt  } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MyTicketsPage = () => {
  const navigate = useNavigate();

  const savedEvents = [
    {
      title: "Coldplay : Music of the Spheres",
      location: "Gelora Bung Karno Stadium",
      date: "November 15, 2023",
      price: "RM 500",
      image: "/Images/ColdPlay Event.png", // Replace with actual image URL
    },
  ];

  return (
    <div className="my-tickets-page p-3" style={{ backgroundColor: '#F8F9FA', minHeight: '100vh' }}>
      {/* Row 1: Menu and Notification Icons */}
      <Row className="align-items-center justify-content-between mb-3">
        <Col xs="auto">
          <FaBars className="menu-icon" onClick={() => navigate("/menu")} />
        </Col>
        <Col xs="auto" className="text-end">
          <FaBell className="notification-icon" />
        </Col>
      </Row>

      {/* Row 2: Title */}
      <Row className="mb-3">
        <Col className="text-center">
          <h4 className="title" style={{ color: '#7A3EAB', fontWeight: 'bold' }}>MY TICKETS</h4>
        </Col>
      </Row>

      {/* Row 3: Search Bar */}
      <InputGroup className="mb-4 search-bar">
        <Form.Control
          placeholder="Search event..."
          aria-label="Search event"
          style={{ borderRadius: '10px 0 0 10px' }}
        />
        <InputGroup.Text style={{ borderRadius: '0 10px 10px 0' }}>
          <FaSearch />
        </InputGroup.Text>
      </InputGroup>

      {/* Row 4: Section Title for Saved Events */}
      <Row className="mb-3">
        <Col>
          <h5 className="section-title" style={{ fontWeight: 'bold' }}>Upcoming</h5>
        </Col>
      </Row>

      {/* Row 5: Event Card with Overlay */}
      <Row className="event-list">
        {savedEvents.map((event, index) => (
          <Col key={index} xs={12} className="mb-3">
            <Card 
              className="event-card" 
              onClick={() => navigate('/tickets')} // Link to Tickets page
              style={{ cursor: 'pointer', borderRadius: '15px', overflow: 'hidden' }}
            >
              <Card.Img variant="top" src={event.image} />
              <div className="card-overlay">
                <div className="overlay-content">
                  <Card.Title className="text-white" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                    {event.title}
                  </Card.Title>
                  <Card.Text className="text-white-50">
                    <FaMapMarkerAlt /> {event.location}
                  </Card.Text>
                  <Card.Text className="text-white-50">{event.date}</Card.Text>
                  <Card.Text className="text-warning" style={{ fontWeight: 'bold' }}>
                    Start from {event.price}
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyTicketsPage;
