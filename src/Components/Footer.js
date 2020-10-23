import React from 'react';
import '../Styles/Footer.css';
import { Row, Col, Container } from 'react-bootstrap';
import playstore from '../Assets/googleplay.png';
import iStore from '../Assets/iStore.png';
import facebook from '../Assets/facebook.png';
import instagram from '../Assets/instagram.png';
import youtube from '../Assets/youtube.png';
import twitter from '../Assets/twitter.png';
import linkedin from '../Assets/linkedin.png';

function Footer() {
    return (
        <>
            <Container className="Footer">
                <Row lg={12} md={12} sm={12} xs={12} className="footer-row">
                    <Col md xs sm>
                        <Row><p className="lfooter-text">SITENAME</p></Row>
                        <Row><p className="sfooter-text">Title One</p></Row>
                        <Row><p className="sfooter-text">Title Two</p></Row>
                        <Row><p className="sfooter-text">Title Three</p></Row>
                        <Row><p className="sfooter-text">Title Four</p></Row>
                        <Row><p className="sfooter-text">Title Five</p></Row>
                    </Col>
                    <Col md xs sm>
                        <Row><p className="lfooter-text">INFORMATION</p></Row>
                        <Row><p className="sfooter-text">Category One</p></Row>
                        <Row><p className="sfooter-text">Category Two</p></Row>
                        <Row><p className="sfooter-text">Category Three</p></Row>
                        <Row><p className="sfooter-text">Category Four</p></Row>
                        <Row><p className="sfooter-text">Category Five</p></Row>
                    </Col>
                    <Col md xs sm>
                        <Row><p className="lfooter-text">CATEGORY</p></Row>
                        <Row><p className="sfooter-text">Category One</p></Row>
                        <Row><p className="sfooter-text">Category Two</p></Row>
                        <Row><p className="sfooter-text">Category Three</p></Row>
                        <Row><p className="sfooter-text">Category Four</p></Row>
                        <Row><p className="sfooter-text">Category Five</p></Row>
                    </Col>
                    <Col md xs sm className="contact-col">
                        <Row><p className="lfooter-text">CONTACT</p></Row>
                        <Row><p className="sfooter-text">help@sitename.com</p></Row>
                        <Row><p className="sfooter-text">Hotline: +00 123 123</p></Row>
                    </Col>
                    <Col sm className="icon-col">
                        <Row className="store-row"><img className="playstore" src={playstore} /></Row>
                        <Row className="store-row"><img className="iStore" src={iStore} /></Row>
                        <Row className="icon-row1">
                            <Col className="scicon-col"><img className="social-icon" src={facebook} /></Col>
                            <Col className="scicon-col"><img className="social-icon" src={twitter} /></Col>
                            <Col className="scicon-col"><img className="social-icon" src={linkedin} /></Col>
                        </Row>
                        <Row className="icon-row2">
                            <Col className="scicon-col"><img className="social-icon" src={instagram} /></Col>
                            <Col className="scicon-col"><img className="social-icon" src={youtube} /></Col>
                            <Col></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer
