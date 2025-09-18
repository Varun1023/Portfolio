import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
 

  <BrowserRouter>
    <Routes>
     
      <Route to="/" element={<App/>}></Route>
    </Routes>
  </BrowserRouter>
)
