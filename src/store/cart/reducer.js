import { handleActions } from "redux-actions";
import {
  addToCartLocal,
  changeCountLocal,
  deleteProductLocal,
  saveCart,
} from "./action";

const deepCopy = (data) => JSON.parse(JSON.stringify(data));

const initState = [];
const actions = {
  [addToCartLocal]: (state, action) => {
    const newState = deepCopy(state);
    const index = newState.findIndex((p) => p.id === action.payload.id);
    if (index > -1) {
      newState[index].count++;
    } else {
      newState.push(action.payload);
    }
    return newState;
  },
  [changeCountLocal]: (state, action) => {
    const newState = deepCopy(state);
    const index = newState.findIndex((p) => p.id === action.payload.id);
    if (index > -1) {
      newState[index].count = action.payload.count;
    }
    return newState;
  },
  [deleteProductLocal]: (state, action) => {
    const newState = deepCopy(state);
    newState.splice(
      newState.findIndex((p) => p.id === action.payload),
      1
    );
    return newState;
  },
  [saveCart]: (state, action) => {
    return action.payload;
  },
};

export const reducer = handleActions(actions, initState);
