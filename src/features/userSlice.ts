import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userData: any
}
// _id: string
// name: string
// email: string
// department: string
// position: string
// role: string
// salary: string
// phonenumber: number

const initialState: UserState = {
  userData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.userData = action.payload;
    },
    clearUser: (state) => {
      state.userData = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;