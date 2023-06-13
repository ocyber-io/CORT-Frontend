import { createSlice } from "@reduxjs/toolkit";
import { UserListThunk } from "../Thunk";
import { UserInterface } from "../shared/interfaces/UserInterface";

interface UserState {
  data: UserInterface[];
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  data: [],
  loading: false,
  error: null,
};
export const UserSlice = createSlice({
  name: "User-slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // User List          ////////////////////////////////////////////////////
    builder
      .addCase(UserListThunk.pending, (state) => {
        state.loading = !state.data.length;
        state.error = null;
      })
      .addCase(UserListThunk.fulfilled, (state, { payload }) => {
        state.data = payload ?? [];
        state.loading = false;
        state.error = null;
      })
      .addCase(UserListThunk.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error;
        }
        state.loading = false;
      });

    //Delete Product       //////////////////////////////////////////////////////
  },
});
