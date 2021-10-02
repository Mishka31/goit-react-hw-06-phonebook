import types from "./contacts-type.js";
import { v4 as uuidv4 } from "uuid";

export const addContact = ({ name, number }) => ({
  type: types.ADDSUBMIT,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

export const deleteContact = (id) => ({
  type: types.DELETE,
  payload: id,
});

export const changeFilter = (value) => ({
  type: types.FIND,
  payload: value,
});

// eslint-disable-next-line
export default { addContact, deleteContact, changeFilter };
