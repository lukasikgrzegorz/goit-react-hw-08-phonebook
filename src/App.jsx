import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';
import './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLogged } from 'redux/selectors';
import { refreshUser } from 'redux/operations';

function App() {
  const isLogged = useSelector(getIsLogged);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, []);

  return (
    <>
      <div>
        <section>
          <Routes>
            <Route
              exact
              path="/"
              element={
                isLogged ? <Contacts /> : <Navigate replace to={'login'} />
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </section>
      </div>
    </>
  );
}

export default App;
