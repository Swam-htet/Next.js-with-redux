import {fetchAllTodoApi} from "@/lib/redux/slices/todoSlice/api";
import {createAppAsyncThunk} from "@/lib/redux/createAppAsyncThunk";
import {Todo} from "@/lib/redux/slices/todoSlice/TodoModel";
import {todoSlice} from "@/lib/redux";

export const loadAllTodosAsync = createAppAsyncThunk(
    'todo/fetchAllTodo',
    async (arg, thunkAPI) => {
        let todos: Todo[] = await fetchAllTodoApi();
        thunkAPI.dispatch(todoSlice.actions.loadAllTodo(todos));
        return todos;
    }
)
//
// export const addNewTodoAsync = createAppAsyncThunk(
//     'todo/addNewTodo',
//     async (todo: Todo) => {
//         let newTodo: Todo[] = await addTodoApi(todo);
//         return newTodo;
//     }
// )
//
// export const deleteTodoAsync = createAppAsyncThunk(
//     'todo/deleteTodo',
//     async (id: string,thunkAPI) => {
//         let deleteTodo: Todo[] = await deleteTodoApi(id);
//         return deleteTodo;
//     }
// )
//
// export const updateTodoAsync = createAppAsyncThunk(
//     'todo/updateTodo',
//     async (todo: Todo) => {
//         let updateTodo: Todo[] = await updateTodoApi(todo);
//         return updateTodo;
//     }
// )