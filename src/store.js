// createStoreでreduxのstoreを作成

import { createStore, combineReducers } from "redux";
import { todoReducer } from "./reducers/todo";

const store = createStore(
  combineReducers({
    todo: todoReducer
  })
);

export default store;
