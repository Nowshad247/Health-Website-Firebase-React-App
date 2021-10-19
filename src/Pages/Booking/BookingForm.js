import React from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
const BookingForm = () => {
    const { user, } = useAuth();

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://doccure-laravel.dreamguystech.com/template/public/assets/img/login-banner.png" alt="" className='img-fluid' />

                </div>
                <div className="col-md-6">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" value={user.displayName} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="number" placeholder="Phone" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>address</Form.Label>
                            <Form.Control type="text" placeholder="address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>your Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary">Booking Now</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;