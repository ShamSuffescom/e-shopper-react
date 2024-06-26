// src/components/Login.js
import React from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import Categories from './Categories';
import ClientCarousel from './ClientCarousel';
// import HomeCarousel from './HomeCarousel';
import Featured from './Featured';
import Offers from './Offers';
import Products from './Products';
import Subscriber from './Subscriber';

const Home = () => {
  return (
    <>
      <Featured></Featured>
      <Categories></Categories>
      <Offers/>
      <Products/>
      <Subscriber/>
      {/* <ClientCarousel/> */}
      {/* <HomeCarousel/> */}
    </>
  );
};

export default Home;
