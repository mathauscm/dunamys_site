import React from 'react';
import Header from '../../components/navigation/Header/Header.jsx';
import Footer from '../../components/navigation/Footer/Footer.jsx';

/**
 * Main Layout Component
 * Main layout wrapper with header and footer
 */
const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;