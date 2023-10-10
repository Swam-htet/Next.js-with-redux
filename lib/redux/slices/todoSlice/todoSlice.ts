import {createSlice} from '@reduxjs/toolkit'
import {Todo} from "@/lib/redux/slices/todoSlice/TodoModel";
import {addNewTodo, deleteTodo, loadAllTodos, updateTodo} from "@/lib/redux/slices/todoSlice/thunks";

export interface TodoSliceState {
    todos: Todo[],
}

const initialState: TodoSliceState = {
    todos: []
}


//console.log('loadAllTodo ',loadAllTodo);
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadAllTodos.pending, (state, action) => {
                console.log('Extra reducer Payload from load all todo - ', action.payload);
            })
            .addCase(loadAllTodos.fulfilled, (state, action) => {
                console.log('Extra reducer fulfilled from load all todo - ', action.payload);
                state.todos.push(...action.payload);
            })
            .addCase(addNewTodo.pending, (state, action) => {
                console.log('Extra reducer Payload from add new todo - ', action.payload);
            })
            .addCase(addNewTodo.fulfilled, (state, action) => {
                console.log('Extra reducer fulfilled from add new todo - ', action.payload);
                state.todos.push(action.payload);
            })
            .addCase(deleteTodo.pending, (state, action) => {
                console.log('Extra reducer Payload from delete todo - ', action.payload);
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                console.log('Extra reducer fulfilled from delete todo - ', action.payload);
                state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
            })
            .addCase(updateTodo.pending, (state, action) => {
                console.log('Extra reducer Payload from delete todo - ', action.payload);
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                console.log('Extra reducer fulfilled from delete todo - ', action.payload);
                state.todos = state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo);
            })
    },
});