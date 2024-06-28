// src/components/Login.js
import React from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import Categories from './Categories';
import CategoriesNavbar from './CategoriesNavbar';
import ClientCarousel from './ClientCarousel';
import HomeCarousel from './HomeCarousel';
import Featured from './Featured';
import Offers from './Offers';
import Products from './Products';
import Subscriber from './Subscriber';

const Home = () => {
  return (
    <>
      
      <div class="container-fluid mb-5">
        <div class="row border-top px-xl-5">
            <CategoriesNavbar />
            <div class="col-lg-9">
              <HomeCarousel/>
            </div>
          </div>
        </div>
      <Featured />
      <Categories />  
      <Offers/>
      <Products/>
      <Subscriber/>
      <ClientCarousel deviceType="desktop"/>
    </>
  );
};

export default Home;
