import { createSelector } from "@reduxjs/toolkit";

export const getFilter = state => state.filter



// export const getContacts = state => state.phonebook.contacts;

// export const getVisibleContacts = (state) => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);

//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };
