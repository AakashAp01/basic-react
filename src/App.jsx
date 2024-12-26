// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router'; // Fixed import from 'react-router' to 'react-router-dom'
import Header from './components/header/Header';
import Counter from './components/Counter';
import BgChange from './components/BgChange';
import Layout from './components/layout/Layout';
import PasswordGenerator from './components/PasswordGenerator';
import CurrencyConverter from './components/CurrencyConvertor';
import Table from './components/api/Table';

function App() {
  return (
    <>
      <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/bg" element={<BgChange />} />
          <Route path="/password" element={<PasswordGenerator />} />
          <Route path="/converter" element={<CurrencyConverter />} />
          <Route path="/table" element={<Table />} />
        </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
