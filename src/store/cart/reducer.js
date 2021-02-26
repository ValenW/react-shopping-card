import { handleActions } from "redux-actions";
import { addToLocalCart } from "./action";

const actions = {
  [addToLocalCart]: (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    const index = newState.findIndex((p) => p.id === action.payload.id);
    if (index > -1) {
      newState[index].count++;
    } else {
      newState.push(action.payload);
    }
    return newState;
  },
};
const initState = [];

export const reducer = handleActions(actions, initState);
