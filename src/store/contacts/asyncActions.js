import {createAsyncThunk} from "@reduxjs/toolkit";
import {instanceAuth} from "../../services/api.js";

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts', async () => {
    const {data} = await instanceAuth.get(`/v1/contacts`, {
      params: {
        sort: 'created:desc'
      },
    });
    return data.resources;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact', async (data) => {
    await instanceAuth.post('/v1/contact', data);
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact', async (contactId) => {
    await instanceAuth.delete(`/v1/contact/${contactId}`);
  }
);
