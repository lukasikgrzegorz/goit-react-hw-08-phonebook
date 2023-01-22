import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginUser, refreshUser } from 'redux/operations';
import { getIsLogged } from 'redux/selectors';
import Navigation from 'components/Navigation/Navigation';

const Login = () => {
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
      loginUser({
        email: e.target.email.value,
        password: e.target.password.value,
      })
    );
  };

  return (
    <>
      <Navigation />
      <div>
        <div>
          <form onSubmit={handleSubmit}>
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
              <button type="submit">Login</button>
            </div>
          </form>

          <p>
            No account yet? <NavLink to="/register">Register</NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
