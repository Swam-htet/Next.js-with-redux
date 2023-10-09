import axios from "axios";

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
