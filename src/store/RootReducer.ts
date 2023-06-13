import { combineReducers } from "@reduxjs/toolkit";
import { UserSlice } from "../Slice";

export const rootReducer = combineReducers({
  Items: UserSlice.reducer,
});
