import {createAsyncThunk} from "@reduxjs/toolkit";
import {instanceAuth} from "../../services/api.js";

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await instanceAuth.get(`/v1/contacts`, {
        params: {
          sort: 'created:desc',
        },
      });
      return data.resources;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const fetchContactById = createAsyncThunk(
  'contacts/fetchContactById',
  async (id, {rejectWithValue}) => {
    try {
      const {data} = await instanceAuth.get(`/v1/contact/${id}`);
      return data.resources[0];
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, {rejectWithValue}) => {
    try {
      const response = await instanceAuth.post('/v1/contact', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, {rejectWithValue}) => {
    try {
      await instanceAuth.delete(`/v1/contact/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const addTag = createAsyncThunk(
  'contacts/addTag',
  async (data, {rejectWithValue}) => {
    try {
      const response = await instanceAuth.put(`/v1/contacts/${data.id}/tags`, {tags: data.tags});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
