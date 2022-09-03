import React from 'react';
import Checkbox from "./Checkbox";
import DeleteButton from "./DeleteButton";
import '../styles/TodoItem.css';

const TodoItem = ({todoItem,  deleteItem, change, changeEditingMode, setItemTitle}) => {

    const[title, setTitle] = React.useState(todoItem.title);

    return (
        <div>
            {!todoItem.isEditing?
            <div className="TodoItem" onDoubleClick={() => changeEditingMode(todoItem.id)}>
                <Checkbox id={todoItem.id} isCompleted={todoItem.isCompleted} change={change}/>
                { todoItem.isCompleted ?
                    <div className="title" style={{textDecoration: 'line-through', color: 'gray'}} >{todoItem.title} </div>
                    : <div className="title">{todoItem.title} </div> }
                <DeleteButton id={todoItem.id} deleteItem={deleteItem} />
            </div>
                :
                <div className="TodoItem input_todoitem" onDoubleClick={() => changeEditingMode(todoItem.id)}>
                    <input className="input"
                           type={'text'}
                           onChange = {e => setTitle(e.target.value)}
                           value={title}
                           onKeyPress={e => { if (e.key === 'Enter') {setItemTitle(todoItem.id, title); changeEditingMode(todoItem.id);}}}
                           placeholder={'Add item'}
                    />
                </div>
            }
        </div>
    );
};

export default TodoItem;