import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await axios.get(
    'https://connections-api.herokuapp.com/contacts'
  );
  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await axios.post(
      'https://connections-api.herokuapp.com/contacts',
      contact
    );
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await axios.delete(`https://connections-api.herokuapp.com/contacts/${id}`);
    return id;
  }
);
