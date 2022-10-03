import { createSlice, current } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addNewContact(state, action) {
      const isSameName = state.contacts.items.find(
        contact =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      isSameName
        ? alert(`${action.payload.name} is already in contacts`)
        : state.contacts.items.push(action.payload);
    },

    removeContact(state, action) {
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== action.payload
      );
    },

    filterContact(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },

  extraReducers: {
    [fetchContacts.pending]: state => {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.contacts.isLoading = false;
      console.log(current(state), payload);
      state.contacts.items = payload;
    },
    [fetchContacts.rejected]: state => {
      state.contacts.isLoading = false;
    },
  },
});

export const { addNewContact, removeContact, filterContact } =
  ContactsSlice.actions;

export default ContactsSlice.reducer;
