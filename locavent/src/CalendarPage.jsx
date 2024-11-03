// CalendarPage.jsx
import React, { useState } from 'react';
import './CalendarPage.css';
import { Row, Col, Card, Form, InputGroup } from 'react-bootstrap';
import { FaBars, FaBell, FaFilter, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarPage = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const eventsToday = [
    {
      title: "Coldplay : Music of the Spheres",
      location: "Gelora Bung Karno Stadium",
      date: "November 15 2023",
      price: "RM 500",
      image: "/Images/ColdPlay Event.png",
    },
  ];

  const userEvents = [
    {
      title: "Muse : Will of the People",
      location: "KL, Malaysia",
      date: "July 23 2025",
      price: "RM 250",
      image: "/Images/Muse Event.png",
    },
    {
      title: "One Direction : Where We Are",
      location: "KL, Malaysia",
      date: "Oct 29 2025",
      price: "RM 780",
      image: "/Images/One Direction Event.png",
    },
  ];

  return (
    <div className="calendar-page">
      {/* Row 1: Menu and Notification Icons */}
      <Row className="align-items-center justify-content-between mb-3">
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
          <h1 className="title">LocaVent <br/><span className="title">Calendar</span></h1>
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

      {/* Row 4: Date Picker */}
      <Row className="mb-4">
        <Col>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="form-control date-picker-input"
            placeholderText="Select a date"
          />
        </Col>
      </Row>

      {/* Row 5: Section Title for Events on That Day */}
      <h5 className="section-title">Events on That Day</h5>

      {/* Row 6: Event Pic */}
      <Row className="event-today mb-4">
        {eventsToday.map((event, index) => (
          <Col key={index} xs={12}>
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

      {/* Row 7: Section Title for User Events */}
      <Row className="align-items-center justify-content-between mb-3">
        <Col><h5 className="section-title">Your Event</h5></Col>
        <Col xs="auto"><a href="#" className="see-all">See all</a></Col>
      </Row>

      {/* Row 8: User Event Cards */}
      <Row className="user-events">
        {userEvents.map((event, index) => (
          <Col key={index} xs={6} className="mb-3">
            <Card className="user-event-card">
              <Card.Img variant="top" src={event.image} />
              <Card.Body>
                <Card.Title className="event-title">{event.title}</Card.Title>
                <Card.Text>
                  <FaMapMarkerAlt /> {event.location}
                </Card.Text>
                <Card.Text>{event.date}</Card.Text>
                <Card.Text className="price"> {event.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CalendarPage;
