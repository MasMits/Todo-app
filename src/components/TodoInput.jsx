import React, {useState} from 'react';
import '../styles/TodoInput.css';
const TodoInput = (props) => {
    const[title, setTitle] = useState('');
    return (
        <div className='TodoInputClass'>
            <input className='input'
            type={'text'}
            onChange = {e => setTitle(e.target.value)}
            value={title}
            onKeyPress={e => e.key === 'Enter' && props.addItem(title)}
            placeholder={'Add item'}
            />
        </div>
    );
};

export default TodoInput;