import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const bookSlice = createSlice({
  name: 'book',
  initialState,

  reducers: {
    setBooks: (state, action) => {
      state.myList = action.payload;
    },
    addBook: (state, action) => {
      state.myList.push(action.payload);
    },
    updateBook: (state, action) => {
      const book = action.payload;
      const index = state.myList.findIndex((b) => b.id === book.id);
      state.myList.splice(index, 1, book);
    },
    deleteBook: (state, action) => {
      state.myList = state.myList.filter((book) => book.id !== action.payload);
    },
  },
});

export const bookActions = bookSlice.actions;
export default bookSlice;
