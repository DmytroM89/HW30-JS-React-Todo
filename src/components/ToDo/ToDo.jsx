import React, {useEffect, useState} from 'react';
import { Container } from "@mui/material";

import './ToDo.scss';
import ToDoForm from "./ToDoForm/ToDoForm";
import ToDoList from "./ToDoList/ToDoList";
import {createTodoApi, deleteTodoApi, getTodos, updateTodoApi} from "./todoApi";

function ToDo() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function initTodos() {
            const todos = await getTodos();
            setTodos(todos);
        }

        initTodos();
    }, [])

    async function changeStatus(id) {
        try {
            const allTodos = [...todos];
            const todo = allTodos.find((item) => item.id === id);
            todo.done = !todo.done;

            await updateTodoApi(id, todo);
            setTodos(allTodos);
        } catch (e) {
            console.warn(e);
        }
    }

    async function deleteTodo(id) {
        try {
            await deleteTodoApi(id);

            const newTodos = todos.filter((todo) => todo.id !== id);
            setTodos(newTodos);
        } catch (e) {
            console.warn(e);
        }
    }

    async function addTodo(todo) {
        try {
            const newTodo = await createTodoApi(todo);
            setTodos([...todos, newTodo]);
        } catch(e) {
            console.warn(e);
        }
    }

    return (
        <Container maxWidth="sm">
            <ToDoForm onAddTodo={addTodo}></ToDoForm>
            <ToDoList todos={todos} onChangeStatus={changeStatus} onDelete={deleteTodo}></ToDoList>
        </Container>
    );
}

export default ToDo;
