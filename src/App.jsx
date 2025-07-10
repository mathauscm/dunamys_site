import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout.jsx';
import Home from './pages/Home/Home.jsx';
import DunamysTVPage from './pages/DunamysTV/DunamysTV.jsx';
import MissaoValores from './pages/MissaoValores/MissaoValores.jsx';
import Doacoes from './pages/Doacoes/Doacoes.jsx';
import SuperClasse from './pages/SuperClasse/SuperClasse.jsx';

/**
 * Main App Component
 * Root component with routing and layout
 */
function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dunamystv" element={<DunamysTVPage />} />
          <Route path="/ministerio/missao-valores" element={<MissaoValores />} />
          <Route path="/ministerio/doacoes" element={<Doacoes />} />
          <Route path="/escolas/super-classe" element={<SuperClasse />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;