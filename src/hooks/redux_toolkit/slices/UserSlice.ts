import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../../models/UserModel";

export interface UserState {
  userType: UserType
}

const initialState: UserState = {
  userType: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserType(state, action: PayloadAction<UserState["userType"]>) {
      state.userType = action.payload;
    },
  },
});

export const { setUserType } = userSlice.actions;
export default userSlice.reducer;
