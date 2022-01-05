import React from 'react';
import { Form } from 'react-bootstrap';
import '../ContactUs/ContactUs.css';

const ContactUs = () => {
    return (
        <div class="container w-75 contact-container">
            <div class="row">
            <h1 className="fs-1">Contact us</h1>
                <div class="col">
                    
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Leave your message!</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    <button type="button" class="btn btn-success">Submit</button>
                </div>
                <div class="col mt-5">
                    <h3> Learn HipHop </h3>
                    <h6> <i class="fas fa-phone-alt"></i> Call: 98098767566</h6>
                    <h6> <i class="fas fa-map-marker-alt"></i> Address: 1218/Nagua 1st lane,Kishoreganj,Dhaka,Bangladesh</h6>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;