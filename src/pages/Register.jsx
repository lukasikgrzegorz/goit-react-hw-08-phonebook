import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { registerUser, refreshUser } from 'redux/operations';
import { getIsLogged } from 'redux/selectors';
import Navigation from 'components/Navigation/Navigation';
import Logo from 'components/Logo/Logo';

const Register = () => {
  const isLogged = useSelector(getIsLogged);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    if (isLogged === true) {
      navigate('/');
    }
  }, [isLogged]);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(
      registerUser({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      })
    );
  };

  return (
    <>
      <header>
        <Navigation />
      </header>
      <div className="container center">
        <Logo></Logo>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Name"
              />
            </div>
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email address"
              />
            </div>

            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
              />
            </div>

            <div>
              <button type="submit">Register</button>
            </div>
          </form>

          <p>
            Already have an account? <NavLink to="/login">Login</NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
