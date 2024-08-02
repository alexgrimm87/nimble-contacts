import {createSlice} from "@reduxjs/toolkit";
import {fetchContacts, addContact, deleteContact} from "./asyncActions";

const initialState = {
  contacts: [],
  isContactsFetching: false,
  isContactAdding: false,
  isContactDeleting: false,
  error: null
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //fetchContacts
      .addCase(fetchContacts.pending, (state) => {
        state.isContactsFetching = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isContactsFetching = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isContactsFetching = false;
        state.error = action.error.message || 'Failed to fetch contacts';
      })

      //addContact
      .addCase(addContact.pending, (state) => {
        state.isContactAdding = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state) => {
        state.isContactAdding = false;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isContactAdding = false;
        state.error = action.error.message || 'Failed to add contact';
      })

      //deleteContact
      .addCase(deleteContact.pending, (state) => {
        state.isContactDeleting = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state) => {
        state.isContactDeleting = false;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isContactDeleting = false;
        state.error = action.error.message || 'Failed to delete contact';
      })
  }
});

export default contactsSlice.reducer;
