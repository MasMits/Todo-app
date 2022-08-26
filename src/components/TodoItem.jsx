import React from 'react';
import Checkbox from "./Checkbox";
import DeleteButton from "./DeleteButton";
import '../styles/TodoItem.css';


const TodoItem = ({id, todoItem,  deleteItem, change}) => {
    return (
        <div className="TodoItem">
            <Checkbox isCompleted={todoItem.isCompleted} change={change}/>
            <div className="title">{todoItem.title}</div>
            <DeleteButton deleteItem={deleteItem}/>
        </div>
    );
};

export default TodoItem;