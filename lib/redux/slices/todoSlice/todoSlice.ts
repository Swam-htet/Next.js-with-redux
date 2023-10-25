import {createSlice} from '@reduxjs/toolkit'
import {Todo} from "@/lib/redux/slices/todoSlice/TodoModel";
import {
    loadAllTodosAsync,
} from "@/lib/redux/slices/todoSlice/thunks";

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
    reducers: {
        loadAllTodo: (state, action) => {
            state.todos = action.payload;
        },
        
    },
    extraReducers: (builder) => {
        builder
            // .addCase(loadAllTodosAsync.pending, (state, action) => {
            //     console.log('Extra reducer Payload from load all todo - ', action.payload);
            // })
            .addCase(loadAllTodosAsync.fulfilled, (state, action) => {
                // console.log('Extra reducer fulfilled from load all todo - ', action.payload);
                state.todos = action.payload;
            })
            // .addCase(addNewTodoAsync.pending, (state, action) => {
            //     console.log('Extra reducer Payload from add new todo - ', action.payload);
            // })
            // .addCase(addNewTodoAsync.fulfilled, (state, action) => {
            //     console.log('Extra reducer fulfilled from add new todo - ', action.payload);
            //     state.todos.push(...action.payload);
            // })
            // .addCase(deleteTodoAsync.pending, (state, action) => {
            //     console.log('Extra reducer Payload from delete todo - ', action.payload);
            // })
            // .addCase(deleteTodoAsync.fulfilled, (state, action) => {
            //     console.log('Extra reducer fulfilled from delete todo - ', action.payload);
            //
            //     let todoItem = action.payload[0];
            //     state.todos = state.todos.filter(todo => todo.id !== todoItem.id);
            // })
            // .addCase(updateTodoAsync.pending, (state, action) => {
            //     console.log('Extra reducer Payload from delete todo - ', action.payload);
            // })
            // .addCase(updateTodoAsync.fulfilled, (state, action) => {
            //     console.log('Extra reducer fulfilled from delete todo - ', action.payload);
            //     let todoItem = action.payload[0];
            //     state.todos = state.todos.map(todo => todo.id === todoItem.id ? todoItem : todo);
            // })
    },
});