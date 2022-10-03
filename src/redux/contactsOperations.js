import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await axios.get(
    'https://633af2d9471b8c395579229b.mockapi.io/contacts'
  );
  return data;
});

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async data => {
//     const {data} = await axios
//       .post('https://633af2d9471b8c395579229b.mockapi.io/contacts', data)
//     return data;
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async id => {
//     const res = await axios
//       .delete('https://633af2d9471b8c395579229b.mockapi.io/contacts', id)
//       .then(contacts => contacts.filter(item => item.id !== id));
//     return res.data;
//   }
// );
