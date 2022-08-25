import React, {useState} from 'react';
//import './styles/TodoInput.css';
const TodoInput = () => {
    const[title, setTitle] = useState('');
    return (
        <div className='TodoInputClass'>
            <input
            type={'text'}
            onChange = {e => setTitle(e.target.value)}
            value={title}
            //onKeyPress={e => e.key === 'Enter' && addItem(title)}
            placeholder={'Add item'}
            />
        </div>
    );
};

export default TodoInput;