import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Creates the blog page and all the individual elements of it, using cards and accordions.
const Blogs = () => {
  return (
    <div>
    <Card>
    <Card.Header><h4>Blogs</h4></Card.Header>
    <Card.Body>
    <h5>Blog articles, allegedly</h5>
    <p>I've never ran a blog so I don't really know what one would write here.</p>
    </Card.Body>
    </Card>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item containing a copypasta</Accordion.Header>
        <Accordion.Body>
          <Card>
            <Card.Header>Copypasta</Card.Header>
            <Card.Body>
            Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. 
            It is not a story the Jedi would tell you. It is a Sith legend.
             Darth Plagueis was a Dark Lord of the Sith, 
             so powerful and so wise he could use the Force to influence the midichlorians to create life… 
             He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. 
             The dark side of the Force is a pathway to many abilities some consider to be unnatural. 
             He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. 
             Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep.
             Ironic. He could save others from death, but not himself.
            </Card.Body>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item containing ඞ</Accordion.Header>
        <Accordion.Body>
          <Card>
            <Card.Header>ඞ</Card.Header>
            <Card.Body>
            ඞ
            </Card.Body>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
      <Accordion.Header>Accordion Item containing unknown secrets!</Accordion.Header>
        <Accordion.Body>
          <Card>
            <Card.Header>Sorry I ran out of creativity</Card.Header>
            <Card.Body>
              I have no idea what to put in this third card.
            </Card.Body>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
  );
}

export default Blogs;