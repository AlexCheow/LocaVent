import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EventDetailsPage.css';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaHeart } from 'react-icons/fa';

const EventDetailsPage = () => {
  const navigate = useNavigate();

  // State for favorite and notification
  const [isFavorited, setIsFavorited] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  // State for ticket quantity
  const [quantity, setQuantity] = useState(1);

  // Dummy event data
  const eventData = {
    title: "Coldplay : Music of the Spheres",
    location: "Gelora Bung Karno Stadium, Jakarta",
    date: "November 15, 2023",
    participants: "50K+",
    price: "RM 500",
    image: "/Images/ColdPlay Event.png",
  };

  // Handle favorite toggle
  const handleFavoriteClick = () => {
    setIsFavorited((prev) => !prev);
    const message = isFavorited 
      ? "The event has been removed from your list" 
      : "The event has been saved";
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  // Handle quantity increment and decrement
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  // Handle Buy Ticket Click
  const handleBuyTicket = () => {
    navigate('/payment-method');
  };

  return (
    <div className="event-details-page">
      {/* Mobile-style Notification */}
      {showNotification && (
        <div className="mobile-notification">
          {notificationMessage}
        </div>
      )}

      {/* Row 1: Back Icon */}
      <Row className="align-items-center mb-3">
        <Col xs="auto">
          <FaArrowLeft className="back-icon" onClick={() => navigate("/")} />
        </Col>
      </Row>

      {/* Event Card */}
      <Card className="event-card">
        {/* Favorite Icon in the top-right corner */}
        <div className="favorite-icon" onClick={handleFavoriteClick}>
          <FaHeart style={{ color: isFavorited ? '#e74c3c' : '#333' }} />
        </div>
        <Card.Img variant="top" src={eventData.image} alt="Event" className="event-image" />
        <Card.Body>
          <Card.Title>{eventData.title}</Card.Title>
          <Card.Text className="event-details">
            <FaMapMarkerAlt /> {eventData.location}
          </Card.Text>
          <Card.Text className="event-details">
            <FaCalendarAlt /> {eventData.date}
          </Card.Text>
          <Card.Text className="event-details">
            <FaUsers /> {eventData.participants} Participants
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Description Section */}
      <Row className="mt-4">
        <Col>
          <h5 className="section-title">Description</h5>
          <p className="description-text">
            Integer id augue iaculis, iaculis orci ut, blandit quam. Donec in elit auctor, finibus quam in, pharetra ligula. Mauris a nisi ut sapien 
            blandit imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed posuere egestas nunc ut tempus. Fu ipsum dolor sit amet.
            <span className="read-more"> Read More..</span>
          </p>
        </Col>
      </Row>

      {/* Venue & Location Section */}
      <Row className="mt-4">
        <Col>
          <h5 className="section-title">Venue & Location</h5>
          <img src="/Images/Map.png" alt="Map" className="map-image" />
        </Col>
      </Row>

      {/* Price, Quantity Selector, and Buy Ticket Button */}
      <Row className="align-items-center mt-4">
        <Col>
          <p className="price-text">Start from <br />{eventData.price}</p>
        </Col>

        {/* Quantity Selector */}
        <Col xs="auto">
          <div className="quantity-selector">
            <Button variant="link" onClick={decreaseQuantity} disabled={quantity === 0}>
              <span style={{ fontSize: '18px', color: '#007bff' }}>-</span>
            </Button>
            <span style={{ fontSize: '16px', padding: '0 10px' }}>{quantity}</span>
            <Button variant="link" onClick={increaseQuantity}>
              <span style={{ fontSize: '18px', color: '#007bff' }}>+</span>
            </Button>
          </div>
        </Col>

        <Col className="text-end">
          <Button variant="primary" className="buy-ticket-button" onClick={handleBuyTicket}>
            Buy Ticket
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default EventDetailsPage;
