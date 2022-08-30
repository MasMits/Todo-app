import React, {useState} from 'react';
import Checkbox from "./Checkbox";
import '../styles/TodoInput.css';

const TodoInput = ({addItem}) => {

    const[title, setTitle] = useState('');

    return (
        <div className='TodoInputClass'>
            <Checkbox/>
            <input className='input'
                   type={'text'}
                   onChange = {e => setTitle(e.target.value)}
                   value={title}
                   onKeyPress={e => { if (e.key === 'Enter') { addItem(title); setTitle(''); }}}
                   placeholder={'Add item'}
            />
        </div>
    );
};

export default TodoInput;