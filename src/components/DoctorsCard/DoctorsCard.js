import React from 'react';
import './DoctorsCard.css';
import { Card, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const DoctorsCard = (props) => {
    const { id, name, title, image, specialities, address, rating } = props.data
    return (
        <div className='col-md-3 col-lg-3 mt-4 mb-4'>
            <CardGroup>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="tops" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {title}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Specialities : {specialities}</ListGroupItem>
                        <ListGroupItem>Address: {address}</ListGroupItem>
                        <ListGroupItem>Rating:{rating}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link as={Link} to={`/booking/${id}`}>Book Now</Card.Link>
                    </Card.Body>
                </Card>
            </CardGroup>

        </div>
    );
};

export default DoctorsCard;