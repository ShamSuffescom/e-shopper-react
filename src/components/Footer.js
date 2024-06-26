// src/components/Footer.js
import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
      <Container>
        <Row className="px-xl-5 pt-5">
          <Col lg="4" md="12" className="mb-5 pr-3 pr-xl-5">
            <a href="/" className="text-decoration-none">
              <h1 className="mb-4 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border border-white px-3 mr-1">E</span>
                Shopper
              </h1>
            </a>
            <p>
              Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.
            </p>
            <p className="mb-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mr-3" />
              123 Street, New York, USA
            </p>
            <p className="mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-primary mr-3" />
              info@example.com
            </p>
            <p className="mb-0">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-primary mr-3" />
              +012 345 67890
            </p>
          </Col>
          <Col lg="8" md="12">
            <Row>
              <Col md="4" className="mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-dark mb-2" href="index.html">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                    Home
                  </a>
                  <a className="text-dark mb-2" href="shop.html">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                    Our Shop
                  </a>
                  <a className="text-dark mb-2" href="detail.html">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                    Shop Detail
                  </a>
                  <a className="text-dark mb-2" href="cart.html">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                    Shopping Cart
                  </a>
                  <a className="text-dark mb-2" href="checkout.html">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                    Checkout
                  </a>
                  <a className="text-dark" href="contact.html">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                    Contact Us
                  </a>
                </div>
              </Col>
              <Col md="4" className="mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-dark mb-2" href="index.html">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                    Home
                  </a>
                  <a className="text-dark mb-2" href="shop.html">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                    Our Shop
                  </a>
                  <a className="text-dark mb-2" href="detail.html">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                    Shop Detail
                  </a>
                  <a className="text-dark mb-2" href="cart.html">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                    Shopping Cart
                  </a>
                  <a className="text-dark mb-2" href="checkout.html">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                    Checkout
                  </a>
                  <a className="text-dark" href="contact.html">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                    Contact Us
                  </a>
                </div>
              </Col>
              <Col md="4" className="mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
                <Form action="">
                  <FormGroup>
                    <Input type="text" className="form-control border-0 py-4" placeholder="Your Name" required />
                  </FormGroup>
                  <FormGroup>
                    <Input type="email" className="form-control border-0 py-4" placeholder="Your Email" required />
                  </FormGroup>
                  <Button className="btn btn-primary btn-block border-0 py-3" type="submit">
                    Subscribe Now
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="border-top border-light mx-xl-5 py-4">
          <Col md="6" className="px-xl-0">
            <p className="mb-md-0 text-center text-md-left text-dark">
              &copy; <a className="text-dark font-weight-semi-bold" href="#">Your Site Name</a>. All Rights Reserved. Designed by
              <a className="text-dark font-weight-semi-bold" href="https://htmlcodex.com">HTML Codex</a><br />
              Distributed By <a href="https://themewagon.com" target="_blank" rel="noopener noreferrer">ThemeWagon</a>
            </p>
          </Col>
          <Col md="6" className="px-xl-0 text-center text-md-right">
            <img className="img-fluid" src="img/payments.png" alt="Payments" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
