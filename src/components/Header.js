// src/components/Header.js
import React from 'react';
import { Container, Row, Col, Form, Input, InputGroup, InputGroupText, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faHeart, faShoppingCart, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid">
        <Row className="bg-secondary py-2 px-xl-5">
          <Col lg="6" className="d-none d-lg-block">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark" href="">FAQs</a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark" href="">Help</a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark" href="">Support</a>
            </div>
          </Col>
          <Col lg="6" className="text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark px-2" href=""><FontAwesomeIcon icon={faFacebookF} /></a>
              <a className="text-dark px-2" href=""><FontAwesomeIcon icon={faTwitter} /></a>
              <a className="text-dark px-2" href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a className="text-dark px-2" href=""><FontAwesomeIcon icon={faInstagram} /></a>
              <a className="text-dark pl-2" href=""><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center py-3 px-xl-5">
          <Col lg="3" className="d-none d-lg-block">
            <a href="" className="text-decoration-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">E</span>
                Shopper
              </h1>
            </a>
          </Col>
          <Col lg="6" className="col-6 text-left">
            <Form action="">
              <InputGroup>
                <Input type="text" className="form-control" placeholder="Search for products" />
                <InputGroupText className="bg-transparent text-primary">
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroupText>
              </InputGroup>
            </Form>
          </Col>
          <Col lg="3" className="col-6 text-right">
            <Button className="btn border">
              <FontAwesomeIcon icon={faHeart} className="text-primary" />
              <span className="badge">0</span>
            </Button>
            <Button className="btn border">
              <FontAwesomeIcon icon={faShoppingCart} className="text-primary" />
              <span className="badge">0</span>
            </Button>
          </Col>
        </Row>
      </div>
      {/* Topbar End */}
    </div>
  );
};

export default Header;
