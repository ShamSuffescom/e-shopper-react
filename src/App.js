import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import Layout from './components/Layout';
// import Header from './components/Header';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Home from './pages/Home/Home';
import MyRouts from './Routers/routes';

// import { profile, services, sign_in } from "./Routers/routesPath";

// const App = () => {
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MyRouts />
      </BrowserRouter>
    </div>
  );
};

export default App;