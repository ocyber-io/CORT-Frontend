import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../api";

export const UserListThunk = createAsyncThunk(
  "Items-thunk",
  async (data, thunkApi) => {
    try {
      const response = await API.Items.read();
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response);
    }
  }
);

// export const DeleteItemsThunk = createAsyncThunk(
//   "Delete-Items-thunk",
//   async (id: string, thunkApi) => {
//     try {
//       const response = await API.Items.deleteById(id);
//       return response.data;
//     } catch (error: any) {
//       return thunkApi.rejectWithValue(error.response);
//     }
//   }
// );
