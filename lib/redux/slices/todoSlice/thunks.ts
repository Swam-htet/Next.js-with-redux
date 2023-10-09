import {fetchAllTodosAPI} from "@/lib/redux/slices/todoSlice/api";
import {createAppAsyncThunk} from "@/lib/redux/createAppAsyncThunk";

export const loadAllTodos = createAppAsyncThunk(
    'todo/fetchAllTodo',
    async () => {
        let todos = await fetchAllTodosAPI();
        // console.log("This is from thunk - ",todos);
        return todos;
    }
)
