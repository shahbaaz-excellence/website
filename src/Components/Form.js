import React from 'react';
import '../Styles/Form.css';
import { Form, Col, Button } from 'react-bootstrap';

const UserForm = () => {
    return (
        <div className="formdiv">
            <div className="form-content">
                <p className="getStarted">Get Started</p>
                <Form className="userform">
                    <Form.Control type="text" placeholder="Name" className="fullname" />
                    <Form.Control type="email" placeholder="Email" className="email" />
                    <Form.Control type="text" placeholder="Phone Number" className="phone" />
                    <Form.Control type="text" placeholder="Full Address" className="address" />
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="Store Name" className="storename" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Store Type" className="storetype" />
                        </Col>
                    </Form.Row>
                    <Form.Check type="checkbox" label="I agree with terms and conditions" className="checkterms" />
                    <Button variant="primary" type="submit" className="submitfrom">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default UserForm;
