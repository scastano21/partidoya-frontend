import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />  {/* El registro será la primera página */}
        <Route path="/login" element={<Login />} />  {/* Página de login */}
      </Routes>
    </Router>
  );
}

export default App;
