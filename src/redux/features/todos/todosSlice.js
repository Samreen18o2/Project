// todosSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { text } = action.payload;
      if (!state.items.some((todo) => todo.text === text)) {
        state.items.push({ text });
      }
    },
    deleteTodo: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    updateTodoText: (state, action) => {
      const { index, text } = action.payload;
      state.items[index].text = text;
    },
  },
});

export const { addTodo, deleteTodo, updateTodoText } = todosSlice.actions;
export default todosSlice.reducer;
