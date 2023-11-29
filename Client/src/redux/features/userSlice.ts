import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  email: string;
  picture: string;
  active: boolean;
}

const initialState: UserState = {
  name: "",
  email: "",
  picture: "",
  active: false,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.picture = action.payload.picture;
      state.active = action.payload.active;
      console.log("estado en user", state);
    },
    LogOutUser: (state) => {
      state.name = "";
      state.email = "";
      state.picture = "";
      state.active = false;
      localStorage.clear();
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveUser, LogOutUser } = UserSlice.actions;

export default UserSlice.reducer;
