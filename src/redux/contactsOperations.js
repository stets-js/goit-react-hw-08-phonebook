import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await axios.get(
    'https://633af2d9471b8c395579229b.mockapi.io/contacts'
  );
  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await axios.post(
      'https://633af2d9471b8c395579229b.mockapi.io/contacts',
      contact
    );
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await axios.delete(
      `https://633af2d9471b8c395579229b.mockapi.io/contacts/${id}`
    );
    return id;
  }
);
