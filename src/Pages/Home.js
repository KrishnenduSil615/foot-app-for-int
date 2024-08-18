

import { Container, Row, Col, Form, Nav, NavLink, Button, Card } from 'react-bootstrap';

import React from 'react';

import ItalianFood from '../Components/img/indian-food-1.avif';
import IndianFood from '../Components/img/Italian-food.jpg';
import ChainisFood from '../Components/img/chainis-food.jpg';
// import Header from './Header';



function Home() {
  return (

    <div >

      <Container className="">
        <h2
          className="text-center mb-5 font-weight-bold"
          style={{
            color: '#2C3E50',
            fontSize: '4rem',
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            textShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)',
            marginTop: '3rem',
            marginBottom: '4rem'
          }}
        >
          Our Delicious Menu
        </h2>

        <hr className=""></hr>
        <Row className="g-4 m-5 g-3">
          <Col md={4}>
            <Card className="h-100 shadow-lg border-0 rounded-4 overflow-hidden">
              <Card.Img variant="top" src={IndianFood} className="img-fluid" style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body className="bg-light text-center p-4">
                <Card.Title className="text-uppercase mb-3" style={{ color: '#333', fontSize: '1.5rem', fontWeight: 'bold' }}>
                  Indian Food Items
                </Card.Title>
                <Card.Text className="text-muted">
                  A short description of the food item. You can include ingredients, flavors, or any special preparation methods.
                </Card.Text>
                <Button variant="dark" className="mt-3">List of Menu</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-lg border-0 rounded-4 overflow-hidden">
              <Card.Img variant="top" src={ItalianFood} className="img-fluid" style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body className="bg-light text-center p-4">
                <Card.Title className="text-uppercase mb-3" style={{ color: '#333', fontSize: '1.5rem', fontWeight: 'bold' }}>
                  Italian Food Items
                </Card.Title>
                <Card.Text className="text-muted">
                  Another delicious item with a unique blend of spices and a hint of sweetness. Perfect for any occasion.
                </Card.Text>
                <Button variant="dark" className="mt-3">List of Menu</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-lg border-0 rounded-4 overflow-hidden">
              <Card.Img variant="top" src={ChainisFood} className="img-fluid" style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body className="bg-light text-center p-4">
                <Card.Title className="text-uppercase mb-3" style={{ color: '#333', fontSize: '1.5rem', fontWeight: 'bold' }}>
                  Chinese Food Items
                </Card.Title>
                <Card.Text className="text-muted">
                  A delightful dish that combines fresh ingredients with a rich and creamy sauce. A must-try!
                </Card.Text>
                <Button variant="dark" className="mt-3">List of Menu</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr className=""></hr>
      </Container>

      <Container className="mt-5">
        <Row className="my-5 py-5 text-center" style={{
          backgroundColor: '#f8f9fa',  
          borderRadius: '12px',         
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
          padding: '2rem'              
        }}>
          <Col>
            <h2 className="text-uppercase fw-bold mb-3" style={{
              color: '#212529',          
              letterSpacing: '2px',      
              fontSize: '2.5rem'          
            }}>
              Join Our Community
            </h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Subscribe to our newsletter and stay updated with our latest offers, news, and exclusive deals.
              Enjoy the convenience of having delicious meals delivered to your doorsteps in just 20 minutes!
              By joining our community, you'll receive:
              <ul style={{ listStyle: 'none', padding: '0', margin: '1rem 0' }}>
                <li>Exclusive discounts and promotions on your favorite dishes</li>
                <li>Early access to new menu items and special events</li>
                <li>Priority delivery service for faster food arrival</li>
                <li>Customized meal recommendations based on your preferences</li>
              </ul>
              Don’t miss out on the opportunity to enhance your dining experience. Subscribe now and be part of our vibrant food community!
            </p>

            <Button variant="primary" size="lg" className="mt-3 px-5 py-2" style={{
              backgroundColor: '#343D3F',   
              borderColor: '#343D3F',       
              fontSize: '1.1rem',           
              borderRadius: '25px'         
            }}>
              Subscribe Now
            </Button>
          </Col>
        </Row>


      </Container>


    </div>

  )
}

export default Home;