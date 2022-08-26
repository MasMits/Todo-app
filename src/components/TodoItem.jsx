import React from 'react';
import Checkbox from "./Checkbox";
import DeleteButton from "./DeleteButton";
import '../styles/TodoItem.css';


const TodoItem = ({todoItem,  deleteItem, change}) => {
    return (
        <div className="TodoItem">
            <Checkbox id={todoItem.id} isCompleted={todoItem.isCompleted} change={change}/>
            <div className="title">{todoItem.title}</div>
            <DeleteButton id={todoItem.id} deleteItem={deleteItem} />
        </div>
    );
};

export default TodoItem;