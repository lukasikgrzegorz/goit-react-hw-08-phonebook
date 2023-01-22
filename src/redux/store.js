import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
