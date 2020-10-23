import React from 'react';
import '../Styles/Row4.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import pic3 from '../Assets/125.png';

function Row4() {
    return (
        <>
            <Container>
                <Row className="Row4">
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <Row><p className="large-text">Loripsum</p></Row>
                        <Row><p className="small-text">Loripsum</p></Row>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}><img className="pic3" src={pic3} /></Col>
                </Row>
            </Container>
        </>
    )
}

export default Row4;
