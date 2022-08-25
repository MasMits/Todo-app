import React from 'react';
import Checkbox from "./Checkbox";
import DeleteButton from "./DeleteButton";
import '../styles/TodoItem.css';


const TodoItem = ({children}) => {
    return (
        <div className="TodoItem">
            <Checkbox/>
            <div className="title">{children}</div>
            <DeleteButton/>
        </div>
    );
};

export default TodoItem;