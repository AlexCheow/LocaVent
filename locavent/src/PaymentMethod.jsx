import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const PaymentMethod = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="p-4" style={{ background: 'linear-gradient(to bottom, #b3e5fc, #ffccff)', minHeight: '100vh' }}>
      {/* Row 1: Back Icon */}
      <Row className="mb-4">
        <Col xs="auto">
          <FaArrowLeft 
            className="back-icon" 
            size={24} 
            onClick={() => navigate(-1)} 
            style={{ cursor: 'pointer', color: 'black' }}
          />
        </Col>
      </Row>

      {/* Row 2: Title */}
      <Row className="mb-5 text-center">
        <Col>
          <h3 style={{ color: '#7A3EAB', fontWeight: 'bold' }}>CHOOSE YOUR PAYMENT METHOD</h3>
        </Col>
      </Row>

      {/* Row 3: Debit / Credit Card Option */}
      <Row className="mb-4 text-center" onClick={() => navigate('/card-payment')} style={{ cursor: 'pointer' }}>
        <Col>
          <img 
            src="/Images/Card.png" 
            alt="Credit Card" 
            style={{ width: '100px', marginBottom: '10px' }} 
          />
          <p style={{ fontWeight: 'bold' }}>DEBIT / CREDIT CARD</p>
        </Col>
      </Row>

      {/* Row 4: Touch N Go E-Wallet Option */}
      <Row className="text-center" onClick={() => navigate('/authentication')} style={{ cursor: 'pointer' }}>
        <Col>
          <img 
            src="/Images/TNG.png" 
            alt="Touch N Go" 
            style={{ width: '100px', marginBottom: '10px' }} 
          />
          <p style={{ fontWeight: 'bold' }}>TOUCH N GO E-WALLET</p>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentMethod;
