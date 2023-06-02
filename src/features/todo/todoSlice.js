import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      console.log(action.payload);
      state.todos.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
