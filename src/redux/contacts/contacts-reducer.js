import { combineReducers } from "redux";
import types from "./contacts-type.js";

const items = (
  state = [
    {
      id: "c2cc433e-97d2-4fa7-b9eb-12a98511c9ab",
      name: "Misha Krasnonos",
      number: "000-00-11-11",
    },
    {
      id: "f98d00d6-01b7-481a-8b52-c607c5127348",
      name: "Sasha Krasnonos",
      number: "111-11-00-00",
    },
    {
      id: "f98d00d6-01b7-481a-8b52-c607c7887 348",
      name: "Lena Krasnonos",
      number: "111-11-22-22",
    },
  ],
  { type, payload }
) => {
  switch (type) {
    case types.ADDSUBMIT:
      return [...state, payload];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.FIND:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
