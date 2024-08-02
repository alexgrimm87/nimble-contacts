import {createAsyncThunk} from "@reduxjs/toolkit";
import {instanceAuth} from "../../services/api.js";

export const postContact = createAsyncThunk(
  'contacts/postContact', async (data) => {
    await instanceAuth.post('/v1/contact', data);
  }
);
