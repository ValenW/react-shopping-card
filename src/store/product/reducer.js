import { handleActions } from "redux-actions";
import { saveProducts } from "./action";

const actions = {
  [saveProducts]: (state, action) => action.payload,
};
const initState = [];

export const reducer = handleActions(actions, initState);
