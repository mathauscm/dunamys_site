import React from 'react';
import { MainLayout } from './layouts';
import { Home } from './pages';

/**
 * Main App Component
 * Root component with routing and layout
 */
function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

export default App;