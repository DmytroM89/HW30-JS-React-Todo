import React from 'react';
import { List } from "@mui/material";
import ToDoItem from "../ToDoItem/ToDoItem";

function ToDoList({todos, onChangeStatus, onDelete}) {
    return (
        <List className="todo-list" sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {todos.map((item) => {
                return <ToDoItem key={item.id} item={item} onChangeStatus={onChangeStatus} onDelete={onDelete}></ToDoItem>;
            })}
        </List>
    );
}

export default ToDoList;
