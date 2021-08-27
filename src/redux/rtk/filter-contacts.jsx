import { createReducer, createAction } from "@reduxjs/toolkit";

export const handleFilter = createAction("contacts/filterContacts");

export const filter = createReducer("", {
  [handleFilter]: (_, { payload }) => payload,
});
