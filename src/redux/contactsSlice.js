import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: "",
  },
};

const handelPending = (state) => {
  state.loading = true;
};

const handelRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const conttactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE.contacts,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handelPending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handelRejected)
      .addCase(addContact.pending, handelPending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handelRejected)
      .addCase(deleteContact.pending, handelPending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handelRejected);
  },
});

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filters) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filters.toLowerCase())
    );
  }
);
// Редюсер слайсу
export const contactsReducer = conttactsSlice.reducer;

// export const selectContacts = (state) => state.contacts.items;
