import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';


export default function Home() {

  // State variables
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuccess(true);
  };

  // Closing alert
  const handleClose = () => {
    setShowSuccess(false);
  };

  return (
    <div>
      <Card>
        <Card.Header><h4>Lali-ho!</h4></Card.Header>
      <Card.Body>
        <h5>Home Page</h5>
        This is the homepage of my website! Explore this expansive website by using the buttons above.
      </Card.Body>
      </Card>
      <br />
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address </Form.Label>
              <br></br>
              <Form.Control type="email" onChange={e => setEmail(e.target.value)} />
              <div>Subscribe to my newsletter for non-existing and definitely not upcoming updates.</div>
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit" style={{ fontFamily: 'Cursive', fontSize: '150%'}}>
              Subscribe
            </Button>
          </Form>
          <br />
          {showSuccess && ( <Alert variant="success" onClose={handleClose} dismissible> Successfully subscribed with email: {email} </Alert>)}
    </div>
  );
}