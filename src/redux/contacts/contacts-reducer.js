import { combineReducers } from "redux";
// import types from "./contacts-type.js";

const items = (state = [], { type, payload }) => {
  return state;
};
const filter = (state = "", { type, payload }) => {
  return state;
};

export default combineReducers({
  items,
  filter,
});
