import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import UserMenu from 'components/UserMenu/UserMenu';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';
import { NavLink, useNavigate } from 'react-router-dom';
import { getIsLogged } from 'redux/selectors';
import { refreshUser } from 'redux/operations';

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
  }, [isLogged]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <>
      <header>
        <UserMenu />
      </header>
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Loading...</b>}
        <ContactList />
      </div>
    </>
  );
};

export default Contacts;
