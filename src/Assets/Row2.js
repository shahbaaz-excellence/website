import React from 'react';
import '../Styles/Row2.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import pic1 from '../Assets/123.png';

function Row2() {
    return (
        <>
            <Container>
                <Row className="Row2">
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <Row><p className="large-text">Loripsum</p></Row>
                        <Row><p className="small-text">Loripsum</p></Row>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}><img className="pic1" src={pic1} /></Col>
                </Row>
            </Container>
        </>
    )
}

export default Row2;
