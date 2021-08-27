import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./phonebook-actions.jsx";

const doubleContact = (contacts, name) => {
  const lookForTheSameName = contacts
    .map((contact) => contact.name)
    .includes(name);

  if (lookForTheSameName) {
    alert(`${name} is already in contacts`);
    return lookForTheSameName;
  }
};

const addContact = (state, { payload }) => {
  const includedContact = doubleContact(state, payload.name);

  if (includedContact) {
    return state;
  }

  return [...state, payload];
};

export const items = createReducer([], {
  [actions.addContact]: addContact,
  [actions.deleteContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

export const filter = createReducer("", {
  [actions.Filter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
