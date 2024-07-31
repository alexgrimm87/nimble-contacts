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
