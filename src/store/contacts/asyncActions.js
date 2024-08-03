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

export const fetchContactById = createAsyncThunk(
  'contacts/fetchContactById', async (id) => {
    const {data} = await instanceAuth.get(`/v1/contact/${id}`);
    return data.resources[0];
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

export const addTag = createAsyncThunk(
  'contacts/addTag', async (data) => {
    await instanceAuth.put(`/v1/contacts/${data.id}/tags`, { tags: data.tags });
  }
);
