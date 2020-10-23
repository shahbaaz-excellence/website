import React from 'react';
import '../Styles/Row1.css';
import UserForm from '../Components/Form';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function Row1() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12} className="btn-column">
                        <div className="loripsum-div"><p className="loripsum">Loripsum</p></div><br />
                        <Container className="btn-div">
                            <Button variant="success" className="register-btn">Register</Button>
                            <Button variant="light" className="login-btn">Login</Button>
                        </Container>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12} className="form-column">
                        <UserForm />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Row1;
