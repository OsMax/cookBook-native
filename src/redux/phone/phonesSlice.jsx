import { createSlice } from '@reduxjs/toolkit';
import { fetchPhones, addPhone, deletePhone } from './operations';

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const phonesSlice = createSlice({
  name: 'phones',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: {
    [fetchPhones.pending]: handlePending,
    [fetchPhones.fulfilled](state, action) {
      // state.contacts.isLoading = false;
      // state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchPhones.rejected]: handleRejected,
    [addPhone.pending]: handlePending,
    [addPhone.fulfilled](state, action) {
      // state.contacts.isLoading = false;
      // state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addPhone.rejected]: handleRejected,
    [deletePhone.pending]: handlePending,
    [deletePhone.fulfilled](state, action) {
      // state.contacts.isLoading = false;
      // state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        task => task.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [deletePhone.rejected]: handleRejected,
  },
});

export const phonesReducer = phonesSlice.reducer;
