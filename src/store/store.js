import {configureStore} from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice";
import createContactReducer from "./createContact/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    createContact: createContactReducer
  },
});
