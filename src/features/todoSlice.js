import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return {items: [...state.items, action.payload]};
        },
        removeTodo: (state) => {
            //todo
            return {items: state.items};
        },
        clearTodos: (state, action) => {
            return {items: []};
        },
    },
});

export const {addTodo, removeTodo, clearTodos} = todoSlice.actions;

export default todoSlice.reducer;
