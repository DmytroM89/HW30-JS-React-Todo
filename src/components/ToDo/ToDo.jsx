import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Container } from "@mui/material";

import './ToDo.scss';
import ToDoForm from "./ToDoForm/ToDoForm";
import ToDoList from "./ToDoList/ToDoList";

function ToDo() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/todos')
            .then(resp => {
                setTodos(resp.data)
            })
    }, [])

    function changeStatus(id) {
        const todoIdx = todos.findIndex((todo) => todo.id === id);
        axios.patch(`http://localhost:3001/todos/${id}`, {done: !todos[todoIdx].done})
            .then(resp => {
                todos[todoIdx].done = resp.data.done;
                setTodos([...todos]);
            })
    }

    function deleteTodo(id) {
        axios.delete(`http://localhost:3001/todos/${id}`)
            .then(() => {
                const newTodos = todos.filter((todo) => todo.id !== id);
                setTodos(newTodos);
            })
    }

    function addTodo(todo) {
        axios.post('http://localhost:3001/todos', { ...todo })
            .then(resp => {
                setTodos([...todos, { ...resp.data }]);
            })
    }

    return (
        <Container maxWidth="sm">
            <ToDoForm onAddTodo={addTodo}></ToDoForm>
            <ToDoList todos={todos} onChangeStatus={changeStatus} onDelete={deleteTodo}></ToDoList>
        </Container>
    );
}

export default ToDo;
