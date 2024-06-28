// src/components/Layout.js
// import React from 'react';
// import MyNavbar from './Navbar';

// const Layout = ({ children }) => {
//   return (
//     <div>
//       <MyNavbar />
//       <div className="container">
//         {children}
//       </div>
//       <footer className="text-center mt-5">
//         <p>&copy; 2024 MyApp. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Layout;

// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
// import CategoriesNavbar from './CategoriesNavbar';
// import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      {/* <Navbar/> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;


