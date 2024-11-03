import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPlusCircle } from 'react-icons/fa';

const CardPayment = () => {
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
          <h3 style={{ color: '#7A3EAB', fontWeight: 'bold' }}>CHOOSE YOUR CARD</h3>
        </Col>
      </Row>

      {/* Row 3: Card Option - Visa */}
      <Row className="mb-3">
        <Col>
          <Card className="p-3" style={{ borderRadius: '15px', cursor: 'pointer' }} onClick={() => navigate('/authentication')}>
            <Row className="align-items-center">
              <Col>
                <p style={{ margin: 0, fontWeight: 'bold' }}>**** **** **** 5882</p>
              </Col>
              <Col xs="auto">
                <img src="/Images/Visa.png" alt="Visa" style={{ width: '40px' }} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Row 4: Card Option - Mastercard */}
      <Row className="mb-3">
        <Col>
          <Card className="p-3" style={{ borderRadius: '15px', cursor: 'pointer' }} onClick={() => navigate('/authentication')}>
            <Row className="align-items-center">
              <Col>
                <p style={{ margin: 0, fontWeight: 'bold' }}>**** **** **** 2260</p>
              </Col>
              <Col xs="auto">
                <img src="/Images/Mastercard.png" alt="MasterCard" style={{ width: '40px' }} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Row 5: Add New Card Option */}
      <Row>
        <Col>
          <Card className="p-3" style={{ borderRadius: '15px', cursor: 'pointer', textAlign: 'center' }} onClick={() => navigate('#')}>
            <Row className="align-items-center justify-content-center">
              <Col xs="auto">
                <p style={{ margin: 0, fontWeight: 'bold' }}>ADD NEW CARD...</p>
              </Col>
              <Col xs="auto">
                <FaPlusCircle size={24} color="#333" />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardPayment;
