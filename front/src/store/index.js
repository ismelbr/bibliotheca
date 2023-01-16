import { configureStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';

import userSlice from './users/userSlice.js';
import bookSlice from './books/bookSlice.js';

const store = configureStore({
  reducer: { auth: userSlice.reducer, books: bookSlice.reducer },
  middleware: [thunk],
});

export default store;
