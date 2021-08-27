import shortId from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contact/add", ({ name, number }) => {
  return {
    payload: {
      name,
      number,
      id: shortId.generate(),
    },
  };
});

const deleteContact = createAction("contact/delete");

const changeFilter = createAction("contact/filter");

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
