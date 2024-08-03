import {createSlice} from "@reduxjs/toolkit";
import {
  fetchContacts,
  fetchContactById,
  addContact,
  deleteContact,
  addTag,
} from "./asyncActions";

const initialState = {
  contacts: [],
  contact: {},
  isContactsFetching: false,
  isContactFetching: false,
  isContactAdding: false,
  isContactDeleting: false,
  isTagAdding: false,
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

      //fetchContactById
      .addCase(fetchContactById.pending, (state) => {
        state.isContactFetching = true;
        state.error = null;
      })
      .addCase(fetchContactById.fulfilled, (state, action) => {
        state.isContactFetching = false;
        state.contact = action.payload;
      })
      .addCase(fetchContactById.rejected, (state, action) => {
        state.isContactFetching = false;
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

      //addTag
      .addCase(addTag.pending, (state) => {
        state.isTagAdding = true;
        state.error = null;
      })
      .addCase(addTag.fulfilled, (state) => {
        state.isTagAdding = false;
      })
      .addCase(addTag.rejected, (state, action) => {
        state.isTagAdding = false;
        state.error = action.error.message || 'Failed to add tag';
      })
  }
});

export default contactsSlice.reducer;
