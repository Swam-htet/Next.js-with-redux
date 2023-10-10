import axios from "axios";
import {Todo} from "@/lib/redux/slices/todoSlice/TodoModel";

const URL = 'http://localhost:8000/api/todos';

export const fetchAllTodosAPI = async () => {
    try {
        let response = await axios.get(URL);
        // console.log("This is fetch all todos with axios - ", response.data);
        return response.data;
    } catch (e) {
        console.log("error - ", e);
        return [];
    }


    // normal fetch with async await
    // try{
    //     let response = await fetch(URL);
    //     let data = await response.json();
    //     console.log("This fetch all todos - ", data);
    //     return data;
    // }
    // catch (e){
    //     console.log("Error -",e);
    //     return [];
    // }

}


export const addTodoApi = async (todo: Todo) => {
    try {
        let response = await axios.post(URL, {...todo});
        // console.log("This is add new todo with axios - ", response.data);
        return response.data;
    } catch (e) {
        console.log("error - ", e);
        return [];
    }
}

export const deleteTodoApi = async (id: string) => {
    try {
        let deleteUrl = URL + "/" + id;
        let response = await axios.delete(deleteUrl);
        // console.log("This is delete todo with axios - ", response.data);
        return response.data;
    } catch (e) {
        console.log("error - ", e);
        return [];
    }
}

export const updateTodoApi = async (todo: Todo) => {
    try {
        let updateUrl = URL + "/" + todo.id;
        let response = await axios.put(updateUrl, todo);
        // console.log("This is update todo with axios - ", response.data);
        return response.data;
    } catch (e) {
        console.log("error - ", e);
        return [];
    }
}

