import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Tickets.css'; 

const Tickets = () => {
  const navigate = useNavigate();

  // Dummy data for the ticket
  const ticketData = {
    eventName: "Coldplay : Music of the Spheres",
    date: "Nov 15 2023",
    location: "Gelora Bung Karno Stadium, Jakarta",
    name: "Indriayani Puspita",
    orderNumber: "CLD09738PL",
    time: "9:00 PM",
    gate: "Yellow",
    seat: "West B",
    image: "/Images/ColdPlay Event.png", // Replace with the actual event image URL
    barcode: "/Images/Barcode.png", // Replace with actual barcode image URL if available
  };

  return (
    <Container fluid className="tickets-container p-4" style={{ background: 'linear-gradient(to bottom, #b3e5fc, #ffccff)', minHeight: '100vh' }}>
      {/* Back Button */}
      <Row className="mb-4">
        <Col xs="auto">
          <FaArrowLeft className="back-icon" size={24} onClick={() => navigate('/')} style={{ cursor: 'pointer', color: 'black' }} />
        </Col>
      </Row>

      {/* Ticket Card */}
      <Card className="ticket-card p-3">
        {/* Event Image */}
        <Card.Img variant="top" src={ticketData.image} alt="Event" className="event-image mb-3" style={{ borderRadius: '10px' }} />

        {/* Event Details */}
        <Card.Body>
          <h5 className="event-name">{ticketData.eventName}</h5>
          <p className="event-info text-muted">{ticketData.date} • {ticketData.location}</p>

          {/* User and Ticket Details */}
          <Row className="mt-3">
            <Col xs={6}><strong>Name</strong><br />{ticketData.name}</Col>
            <Col xs={6} className="text-end"><strong>Order Number</strong><br />{ticketData.orderNumber}</Col>
          </Row>

          <Row className="mt-3">
            <Col xs={6}><strong>Date</strong><br />{ticketData.date}</Col>
            <Col xs={6} className="text-end"><strong>Time</strong><br />{ticketData.time}</Col>
          </Row>

          <Row className="mt-3">
            <Col xs={6}><strong>Gate</strong><br />{ticketData.gate}</Col>
            <Col xs={6} className="text-end"><strong>Seat</strong><br />{ticketData.seat}</Col>
          </Row>

          {/* Barcode */}
          <div className="barcode-section text-center mt-4">
            <img src={ticketData.barcode} alt="Barcode" className="barcode-img" />
            <p className="barcode-text mt-2 text-muted">Scan your barcode at the entry gate.</p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Tickets;
