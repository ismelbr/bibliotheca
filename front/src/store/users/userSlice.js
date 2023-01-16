import { createSlice } from '@reduxjs/toolkit';

const initialAuth = JSON.parse(localStorage.getItem('user'));

const initialState = {
  username: initialAuth?.username,
  accessToken: initialAuth?.accessToken,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.accessToken = action.payload.accessToken;

      console.log(action.payload);
      localStorage.setItem('user', JSON.stringify(state));
    },
    logout: (state, action) => {
      state.username = null;
      state.accessToken = null;
      localStorage.removeItem('user');
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
