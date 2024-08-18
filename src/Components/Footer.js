import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <div style={{ backgroundColor: "#212529" }}>
            <Container className='px-5' >
                <Row className="bg-dark text-white py-5 mt-5" style={{ borderTop: '2px solid #444' }}>
                    <Col md={4}>
                        <h5 className="text-uppercase mb-3" style={{ fontWeight: 'bold' }}>Sil's KITCHEN</h5>
                        <p className="mb-1">Shyamangar, Netai Pally, Kolkata, India</p>
                        <p className="mb-0">8620819381</p>
                    </Col>
                    <Col md={4}>
                        <h5 className="text-uppercase mb-3" style={{ fontWeight: 'bold' }}>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#home" className="text-white text-decoration-none">Home</a></li>
                            <li className="mb-2"><a href="#about" className="text-white text-decoration-none">About</a></li>
                            <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={4} className="text-end">
                        <h5 className="text-uppercase mb-3" style={{ fontWeight: 'bold' }}>Follow Us</h5>
                        <p className="mb-0">
                            <a href="https://www.facebook.com/" className="text-white me-3 text-decoration-none">Facebook</a>
                            <a href="https://www.twetar.com/" className="text-white text-decoration-none">Twitter</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer