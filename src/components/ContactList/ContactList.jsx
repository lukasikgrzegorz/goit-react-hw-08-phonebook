import React from 'react';
import Contact from './Contact/Contact';
import { getContacts } from 'redux/contacts/selectors';
import { getFilter } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteContact(e.target.id));
  };

  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => {
          return (
            <Contact key={contact.id}>
              {contact.name} : {contact.number}{' '}
              <button id={contact.id} onClick={handleDelete}>
                Delete
              </button>
            </Contact>
          );
        })}
    </ul>
  );
};

export default ContactList;
