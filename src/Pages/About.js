import React from 'react'
// import { Col, Container } from 'react-bootstrap';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function About() {
  return (
    <Container>
      <h1 className='text-center'  style={{fontSize:'5rem',padding:"1rem"}}>About</h1>
      <Col lg={7} className='mx-auto'>
        <img style={{width:"250px", borderRadius:"50%", margin:"2rem", float:"left"}} src='https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png' alt='picture' /><p >Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure, accepted explain up to now. , The things we are accusing of these in the explication of the truth receives from the flattery of her will never be the trouble and they are refused to the pleasures and the pleasures of the pain, explain the treatment of excepturi of the blessed sufferings. I never said will unfold in him receives at another time he may please the one that those works, we are less than they, this refused to the pleasures of deleniti? Those are! Will unfold in times of pleasure, this pain will be a right enjoyed by corrupt, are accusing him of all pleasures, and seek his own, or, to the needs of the agony of the choice. We hate the fellow.responsibilities are to stand for the right builder of pleasure, accepted explain up to now. , The things we are accusing of these in the explication of the truth receives from the flattery of her will never be the trouble and they are refused to the pleasures and the pleasures of the pain.Lorem ipsum dolor, sit amet consectetur rebates. The distinction, that arise from or to. The greater
       
        </p>
      </Col>
      <Row className="my-5">
                    <Col md={6} className="mx-auto">
                        <h3 className="text-center text-uppercase mb-4" style={{ color: '#343D3F' }}>Contact Us</h3>
                        <Form>
                            <Form.Group controlId="formName" className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name"/>
                            </Form.Group>
                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group controlId="formMessage" className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Write your message here..." />
                            </Form.Group>
                            <Button variant="dark" type="submit" className="w-100">Submit</Button>
                        </Form>
                    </Col>
                </Row>
    </Container>
     
  )
}

export default About