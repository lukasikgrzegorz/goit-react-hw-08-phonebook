import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/contacts/selectors';
import { NavLink, useNavigate } from 'react-router-dom';
import { getIsLogged } from 'redux/auth/slectors';
import { refreshUser } from 'redux/auth/operations';

const Contacts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const isLogged = useSelector(getIsLogged);

  useEffect(() => {
    dispatch(refreshUser());
    if (isLogged === false) {
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Loading...</b>}
      <ContactList />
      <NavLink to="/login">Sign up</NavLink>
    </div>
  );
};

export default Contacts;
