'use client';

import {addNewTodo, deleteTodo, loadAllTodos, selectTodo, updateTodo, useDispatch, useSelector} from "@/lib/redux";
import {useEffect, useState} from "react";
import {Todo} from "@/lib/redux/slices/todoSlice/TodoModel";


export default function Todo() {
    let todos = useSelector(selectTodo);
    let dispatch = useDispatch();

    // fetch data
    useEffect(() => {
        dispatch(loadAllTodos());
    }, []);


    // dispatch handler group
    const addTodoHandler = (todo: Todo) => {
        // console.log('Add todo handler ', todo);
        dispatch(addNewTodo(todo));
    };


    const deleteTodoHandler = (todo: Todo) => {
        // console.log('Delete todo handler ', todo);
        dispatch(deleteTodo(todo.id));

    }

    const updateToDoHandler = (todo: Todo) => {
        // console.log("Update todo handler - ", todo);
        dispatch(updateTodo(todo));
    };


    // component return 
    return (<div className={'container mx-auto p-10'}>

        <h1 className={'text-3xl mb-3'}>Todo List</h1>
        <TodoInput addTodoHandler={addTodoHandler}/>
        {
            todos.map((todo, index) => <TodoItem key={index}
                                                 todo={todo} deleteTodo={deleteTodoHandler}
                                                 updateTodo={updateToDoHandler}/>)
        }

    </div>)
}


export function TodoInput({addTodoHandler}) {

    let [title, setTitle] = useState('');

    const btnAddHandler = () => {

        // mock todo to add
        let todo: Todo = {
            title: title,
            user_id: 2,
            description: "This is description from button",
            completed: false,
        }
        // setTitle('');
        addTodoHandler(todo);
    }

    return (
        <div>
            <input type="text"
                   className={'p-3'}
                   placeholder={'Add Here New TODO'}
                   onChange={(e) => {
                       setTitle(e.target.value);
                   }}/>
            <button
                className={"bg-orange-500 hover:text-white hover:ring-2 hover:ring-orange-300 rounded py-2 px-3 ms-4"}
                onClick={btnAddHandler}>
                Add New Todo
            </button>
        </div>);
}


export function TodoItem(props: {
    todo: Todo,
    deleteTodo: (todo: Todo) => void,
    updateTodo: (todo: Todo) => void,
}) {
    const [editMode, setEditMode] = useState(false);
    const [todoTitle, setTodoTitle] = useState(props.todo.title);

    const btnDeleteTodoHandler = () => {
        // console.log('Delete todo  ', props.todo);
        props.deleteTodo(props.todo);
    };

    const btnEditHandler = () => {
        setEditMode(!editMode);
        if (editMode) {
            console.log('Dispatch update');
            let updateTodo = {
                ...props.todo,
                title: todoTitle
            };
            // console.log('Update todo ', updateTodo);
            props.updateTodo(updateTodo);
        }
    }

    return <div className={'bg-gray-50 p-5 rounded-2xl my-5'}>



        <h2>ID : {props.todo.id}</h2>

        {
            !editMode ?
                props.todo!.title
                : <input type={"text"}
                         className={'p-3 w-full'}
                         value={todoTitle}
                         onChange={(event) => setTodoTitle(event.target.value)}/>
        }
        <div>
            <button type={"button"}
                    className={"bg-red-500 hover:text-white hover:ring-2 hover:ring-red-300 rounded py-2 px-3 me-4"}
                    onClick={btnDeleteTodoHandler}>
                Delete
            </button>

            <button type={"button"}
                    className={"bg-green-500 hover:bg-green-400 hover:text-white hover:ring-2 hover:ring-green-300 rounded py-2 px-3 m-2"}
                    onClick={btnEditHandler}>

                {editMode ? 'Update' : 'Edit'}
            </button>
        </div>


    </div>;
}
