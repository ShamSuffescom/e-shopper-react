import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home/Home';

const MyRouts = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/" exact element={<Home/>}  />
                </Route>
            </Routes>
        </>
    );
  };
  
  export default MyRouts;