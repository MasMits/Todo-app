import React from 'react';
import Checkbox from "./Checkbox";
import DeleteButton from "./DeleteButton";


const TodoItem = (children) => {
    return (
        <div>
            <Checkbox/>
            <div className="title">{children}</div>
            <DeleteButton/>
        </div>
    );
};

export default TodoItem;