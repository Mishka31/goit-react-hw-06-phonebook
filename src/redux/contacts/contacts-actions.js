import types from "./contacts-type.js";
import { v4 as uuidv4 } from "uuid";

export const formSubmitHandler = (id) => ({
  type: types.ADDSUBMIT,
  payload: {
    contacts: [...contacts, { id: uuidv4(), ...data }],
  },
});

// export const onDelete = (id) => ({
//   type: types.DELETE,
//   payload: value,
// });
// export const onFind = (e) => ({
//   type: types.FIND,
//   payload: value,
// });

export default { formSubmitHandler };
