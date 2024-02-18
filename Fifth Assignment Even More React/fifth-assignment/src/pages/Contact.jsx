import React from 'react';
import { Card, Button } from 'react-bootstrap';


// Creates the contact page, with each element being contained in cards
const ContactPage = () => {
  return (
    <div>
      <Card>
        <Card.Header><h4>Contact Me</h4></Card.Header>
      <Card.Body>
      These buttons are used to contact me for any (specific) reason you may have:
      </Card.Body>
      </Card>
      <br />

      <Card>
        <Card.Header>General Inquiry</Card.Header>
        <Card.Body>
          <Card.Text>For any general things, or if you just want to send me a joke or the like:</Card.Text>
          <Button variant="primary" href="mailto:thisisnotanemail@aol.com" style={{backgroundColor: '#18ff00', borderColor: '#b00b69', color: '#b00b69'}}>thisisnotanemail@aol.com</Button>
        </Card.Body>
      </Card>
      <br />

      <Card>
        <Card.Header>Feedback</Card.Header>
        <Card.Body>
          <Card.Text>If you have feedback, you can post it here:</Card.Text>
          <Button variant="primary" href="mailto:donotreadthese@feedback.com" style={{ backgroundColor: '#ff00ef', borderColor: '#000000', color: 'black' }}>donotreadthese@feedback.com</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>Support</Card.Header>
        <Card.Body>
          <Card.Text>Need assistance? You can try to contact me with my student e-mail, no guarantee I'll reply!</Card.Text>
          <Button variant="primary" href="mailto:eolol002@edu.xamk.fi" style={{ backgroundColor: '#e4ad2a', borderColor: '#000000' }}>eolol002@edu.xamk.fi</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactPage;