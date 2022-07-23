import React, {useState} from 'react';
import {FormControl, IconButton, Input, InputAdornment, InputLabel} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function ToDoForm({onAddTodo}) {
    const [todo, setTodo] = useState({
        name: '',
        done: false
    });

    function changeTodoName(e) {
        setTodo({
            ...todo,
            name: e.target.value
        });
    }

    function addNewTodo() {
        onAddTodo(todo);

        setTodo({
            name: '',
            done: false
        });
    }

    return (
        <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
            <InputLabel htmlFor="new-task">New task</InputLabel>
            <Input
                id="new-task"
                type='text'
                value={todo.name}
                onChange={changeTodoName}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton edge="end" color="success" onClick={addNewTodo}>
                            <AddIcon />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
}

export default ToDoForm;
