import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    const client = axios.create({
      baseURL: 'https://connections-api.herokuapp.com/',
    });

    try {
      const response = await client.post('/users/login', {
        email: e.target.email.value,
        password: e.target.password.value,
      });
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
          No account yet? <NavLink to="/">Contact</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
