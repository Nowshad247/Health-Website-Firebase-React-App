import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import { HashLink } from 'react-router-hash-link';
import { AiOutlineArrowRight } from "react-icons/ai";

import './Footer.css'
const Footer = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div>
                        <img src={logo} alt="" className='img-flude' />
                        <p>
                            Search Doctor, Make an Appointment.
                            Discover the best doctors, clinic and hospital the city nearest to you.
                        </p>

                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <ListGroup>
                            <ListGroup.Item><Link to="/my-profile"><AiOutlineArrowRight /> User Profile-Private Route</Link></ListGroup.Item>
                            <ListGroup.Item><Link to='/booking-form'><AiOutlineArrowRight /> Booking From-Private Route </Link></ListGroup.Item>
                            <ListGroup.Item><Link to='/booking/7'><AiOutlineArrowRight /> Service Datails-Private Route </Link></ListGroup.Item>
                            <ListGroup.Item><Link to='/login'><AiOutlineArrowRight /> Login</Link></ListGroup.Item>

                        </ListGroup>
                    </div>
                </div>
                <div className="col-md-4">
                    <ListGroup>
                        <ListGroup.Item><Link to='/'><AiOutlineArrowRight /> Home</Link></ListGroup.Item>
                        <ListGroup.Item><Link to='/about-us'><AiOutlineArrowRight /> About us</Link></ListGroup.Item>
                        <ListGroup.Item><Link to='/contact-us'><AiOutlineArrowRight /> Contact Us</Link></ListGroup.Item>
                        <ListGroup.Item><Link to='/login'><AiOutlineArrowRight /> Login</Link></ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center mt-5">
                    <p>All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;