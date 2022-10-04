import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addNewContact } from '../../contactSlice';
import { addContact } from 'redux/contactsOperations';
import nextId from 'react-id-generator';

import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(state => state.contacts.contacts.items);

  const inputChangeName = e => {
    setName(e.target.value);
  };
  const inputChangePhone = e => {
    setPhone(e.target.value);
  };

  const formReset = () => {
    setName('');
    setPhone('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const sameName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (sameName) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ id: nextId(), name: name, number: phone }));
    formReset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        <p className={css.title}>Name</p>
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          onChange={inputChangeName}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Type contact name..."
          required
        />
      </label>
      <label>
        <p className={css.title}>Number</p>
        <input
          className={css.input}
          type="tel"
          name="number"
          value={phone}
          onChange={inputChangePhone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Type contact phone..."
          required
        />
      </label>
      <button className={css.btn}>Add contact</button>
    </form>
  );
};

export default ContactForm;
