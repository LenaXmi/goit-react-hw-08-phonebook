import { createSelector } from "@reduxjs/toolkit";
import { selectContactsResult } from "./phonebookSlise"
export const getFilter = state => state.filter


export const selectAllContacts = createSelector(
  [selectContactsResult],
  contactsResult => {
    console.log(contactsResult.data);
    return contactsResult?.data ?? [];
  },
);

// export const getContacts = state => state.phonebook.contacts;

// export const getVisibleContacts = (state) => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);

//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };
