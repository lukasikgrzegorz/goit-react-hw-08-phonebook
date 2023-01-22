import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';
import './App.module.css';

function App() {
  return (
    <>
      <div>
        <section>
          <Routes>
            <Route index path="/" element={<Contacts />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </section>
      </div>
    </>
  );
}

export default App;
