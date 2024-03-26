import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.phones.contacts.items;
export const selectIsLoading = state => state.phones.contacts.isLoading;
export const selectError = state => state.phones.contacts.error;
export const selectFilter = state => state.filter.filter;

export const filterContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  }
);
