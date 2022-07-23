import React from 'react';
import {Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import './ToDoItem.scss';

function ToDoItem({item, onChangeStatus, onDelete}) {
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="delete" color="error" onClick={() => onDelete(item.id)}>
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
            className={'todo-item ' + (item.done ? 'todo-item--done' : '')}
        >
            <ListItemButton role={undefined}  onClick={() => onChangeStatus(item.id)} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={item.done}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText className="todo-item__text" primary={item.name} />
            </ListItemButton>
        </ListItem>
    );
}

export default ToDoItem;
