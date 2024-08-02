import {createSlice} from "@reduxjs/toolkit";
import {postContact} from "./asyncActions";

const initialState = {
  loading: false,
  error: null
}

export const createContactSlice = createSlice({
  name: 'createContact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postContact.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(postContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to post contact';
      });
  }
});

export default createContactSlice.reducer;
