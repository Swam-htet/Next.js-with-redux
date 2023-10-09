import {createSlice} from '@reduxjs/toolkit'
import {Todo} from "@/lib/redux/slices/todoSlice/TodoModel";
import {loadAllTodos} from "@/lib/redux/slices/todoSlice/thunks";

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
                console.log('Extra reducer Payload ', action.payload);

            })
            .addCase(loadAllTodos.fulfilled, (state, action) => {
                console.log('Extra reducer fulfilled ', action.payload);
                state.todos.push(...action.payload);
            })
    },
});