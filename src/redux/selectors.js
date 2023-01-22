export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.filter.value;
export const getIsLogged = state => state.auth.isLogged;
export const getEmail = state => state.auth.email;
