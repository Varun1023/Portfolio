import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,

  <BrowserRouter>
    <Routes>
      <Route to="/about" element={<About/>}></Route>
      <Route to="/" element={<App/>}></Route>
    </Routes>
  </BrowserRouter>
)
