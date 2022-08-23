import React from 'react';
import {BrowserRouter as Router , Route , Routes, Navigate} from 'react-router-dom';
import './App.css';
import Home from './components/main pages/Home';
import Bitcoin from './components/main pages/Bitcoin'
import Blockchain from './components/main pages/Blockchain'
import Convertor from './components/main pages/Convertor'
import Header from './components/headers/Header'


function App() {
  return (
    <Router>
    <Header/>
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bitcoin" element={<Bitcoin />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/convertor" element={<Convertor />} />
        <Route path="*" element={<Navigate to = "/"/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
