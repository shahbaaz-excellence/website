import React from 'react';
import '../Styles/Row3.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import pic2 from '../Assets/124.png';

function Row3() {
    return (
        <>
            <Container >
                    <Row className="Row3">
                        <Col lg={6} md={6} sm={12} xs={12}><img className="pic2" src={pic2} /></Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <Row><p className="large-text">Loripsum</p></Row>
                            <Row><p className="small-text">Loripsum</p></Row>
                        </Col>
                    </Row>
                </Container>
        </>
    )
}

export default Row3;
