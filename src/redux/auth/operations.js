import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const client = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setAuthHeader = token => {
  client.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  client.defaults.headers.common.Authorization = '';
};

export const loginUser = createAsyncThunk(
  'contacts/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await client.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'contacts/refresh',
  async (_, thunkAPI) => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        setAuthHeader(token);
        const response = await client.get('/users/current');
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    } else {
      return thunkAPI.rejectWithValue(null);
    }
  }
);
