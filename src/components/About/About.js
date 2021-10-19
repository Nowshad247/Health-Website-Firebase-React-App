import React from 'react';
import './About.css'
import { Card, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap'
const About = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
            <div className="row m-5" id='about'>
                <div className="col-md-4 col-lg-4">
                    <CardGroup>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://medifab.dreamguystech.com/blue/assets/img/icon-01.png" />
                            <Card.Body>
                                <Card.Title>Book an Appointment
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
                <div className="col-md-4 col-lg-4">
                    <CardGroup>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://medifab.dreamguystech.com/blue/assets/img/icon-02.png" />
                            <Card.Body>
                                <Card.Title>Consult with a Doctor
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
                <div className="col-md-4 col-lg-4">
                    <CardGroup>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://medifab.dreamguystech.com/blue/assets/img/icon-03.png" />
                            <Card.Body>
                                <Card.Title>Make a family Doctor
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>

            </div>
        </div>
    );
};

export default About;