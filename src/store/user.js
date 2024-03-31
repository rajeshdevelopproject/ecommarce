import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { name: "rajes" },
  value: 0,
};

export const userSlice = createSlice({
  name: "userdetails",
  initialState,
  reducers: {
    addUser: (state) => {
      initialState["value"] = state;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
