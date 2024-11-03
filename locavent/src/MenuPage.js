// MenuPage.jsx
import React from 'react';
import './MenuPage.css';
import { Row, Col } from 'react-bootstrap';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MenuPage = () => {
  const navigate = useNavigate();

  return (
    <div className="menu-page-container">
      {/* Top Row: Menu and User Icons */}
      <Row className="align-items-center justify-content-between top-row">
        <Col xs="auto">
          <FaBars className="menu-icon" />
        </Col>
        <Col xs="auto">
          <FaUserCircle className="user-icon" />
        </Col>
      </Row>

      {/* Centered Menu Items with Buttons */}
      <div className="menu-items">
        <Row className="menu-item justify-content-center">
          <Col xs="auto" className="text-center">
            <button onClick={() => navigate("/")} className="menu-button">HOME</button>
          </Col>
        </Row>
        <Row className="menu-item justify-content-center">
          <Col xs="auto" className="text-center">
            <button onClick={() => navigate("/calendar")} className="menu-button">CALENDAR</button>
          </Col>
        </Row>
        <Row className="menu-item justify-content-center">
          <Col xs="auto" className="text-center">
            <button onClick={() => navigate("/saved-events")} className="menu-button">SAVED EVENT</button>
          </Col>
        </Row>
        <Row className="menu-item justify-content-center">
          <Col xs="auto" className="text-center">
            <button onClick={() => navigate("/my-tickets")} className="menu-button">MY TICKETS</button>
          </Col>
        </Row>
        <Row className="menu-item justify-content-center">
          <Col xs="auto" className="text-center">
            <button onClick={() => navigate("/notifications")} className="menu-button">NOTIFICATION</button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MenuPage;
