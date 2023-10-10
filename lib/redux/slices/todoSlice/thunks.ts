import {addTodoApi, deleteTodoApi, fetchAllTodosAPI, updateTodoApi} from "@/lib/redux/slices/todoSlice/api";
import {createAppAsyncThunk} from "@/lib/redux/createAppAsyncThunk";
import {Todo} from "@/lib/redux/slices/todoSlice/TodoModel";

export const loadAllTodos = createAppAsyncThunk(
    'todo/fetchAllTodo',
    async () => {
        let todos = await fetchAllTodosAPI();
        // console.log("This is from thunk - ",todos);
        return todos;
    }
)

export const addNewTodo = createAppAsyncThunk(
    'todo/addNewTodo',
    async (todo:Todo) => {
        let newTodo = await addTodoApi(todo);
        // console.log("This is new todo from thunk - ", newTodo);
        return newTodo;
    }
)

export const deleteTodo = createAppAsyncThunk(
    'todo/deleteTodo',
    async (id:string) => {
        let deleteTodo = await deleteTodoApi(id);
        // console.log("This is delete todo from thunk - ", deleteTodo);
        return deleteTodo;
    }
)

export const updateTodo = createAppAsyncThunk(
    'todo/updateTodo',
    async (todo:Todo) => {
        let updateTodo = await updateTodoApi(todo);
        // console.log("This is update todo from thunk - ", updateTodo);
        return updateTodo;
    }
)