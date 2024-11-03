import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBars, FaBell } from 'react-icons/fa';

const NotificationsPage = () => {
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
          <FaBell size={22} color="black" />
        </Col>
      </Row>
      <br/>
      {/* Row 2: Title */}
      <Row className="mb-4">
        <Col className="text-center">
          <h1 style={{ color: '#7A3EAB', fontWeight: 'bold', margin: 0 , textAlign: 'left' }}>Notification</h1>
        </Col>
      </Row>
      <br/>
      {/* Notification Cards */}
      {notifications.map((notification, index) => (
        <Row key={index} className="mb-3">
          <Col>
            <Link 
              to={notification.title === 'RSVP Confirmed' ? '/NotificationDetails' : '#'}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Card className="shadow-sm border-0" style={{ borderRadius: '15px', padding: '10px' }}>
                <Row className="align-items-center">
                  <Col xs={2}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#E0E0E0',
                        borderRadius: '50%',
                      }}
                    ></div>
                  </Col>
                  <Col xs={8}>
                    <Card.Body className="p-0">
                      <Card.Title className="m-0" style={{ fontSize: '14px', fontWeight: 'bold' }}>
                        {notification.title}
                      </Card.Title>
                      <Card.Text className="text-muted" style={{ fontSize: '12px' }}>
                        {notification.message}
                      </Card.Text>
                    </Card.Body>
                  </Col>
                  <Col xs={2} className="text-end text-muted" style={{ fontSize: '12px' }}>
                    {notification.time}
                  </Col>
                </Row>
              </Card>
            </Link>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

// Sample data for notifications
const notifications = [
  {
    title: 'Reminder: 2 events happening',
    message: 'A friendly reminder for users who...',
    time: '10:30 PM',
  },
  {
    title: 'RSVP Confirmed',
    message: 'Congratulations, you have successfully...',
    time: '6:41 PM',
  },
  {
    title: 'Event Update',
    message: 'Alerts users to important updates...',
    time: '3:41 PM',
  },
  {
    title: 'Venue Change',
    message: 'Alerts users about any venue...',
    time: '11:26 AM',
  },
];

export default NotificationsPage;
