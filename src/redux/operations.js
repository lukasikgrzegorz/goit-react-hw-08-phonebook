import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const client = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

client.interceptors.request.use(config => {
  config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await client.post('/users/login', credentials);
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      alert(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await client.get('/users/current');
        return response.data;
      } catch (error) {
        alert(error.message);
        return thunkAPI.rejectWithValue(error.message);
      }
    } else {
      return thunkAPI.rejectWithValue(null);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      const response = await client.post('/users/logout');
      localStorage.clear();
      return response;
    } catch (error) {
      alert(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  'user/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await client.post('/users/signup', credentials);
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      alert(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await client.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const { name, number } = newContact;
      const response = await client.post('/contacts', {
        name: name,
        number: number,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await client.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
