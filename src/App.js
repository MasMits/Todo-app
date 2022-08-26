import './styles/App.css';
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import React, {useState} from 'react';

function App() {
const [todos, setTodos] = useState([
      {id: 1, title:'Something', isCompleted: false},
      {id: 2, title:'Something 2', isCompleted: false},
      {id: 3, title:'Something 3', isCompleted: false},
    ]
)
    function addItem(title) {
        console.log('test 1');
        setTodos([...todos, {
           id: Date.now(),
           title,
           isComplited: false
        },
    ])}


    function deleteItem(id) {
        console.log('test 2');
        setTodos(todos.filter(p => p.id !== id));

    }

    function change(id) {
        console.log('test 3');
        console.log(id);
        let _todos = [];

        todos.forEach((value, key) => {
            _todos[key] = value;
            if(value.id === id) {
                _todos[key].isCompleted = !_todos[key].isCompleted;
            }
        })
        setTodos(_todos);

    }
  return (
    <div className="app">
        <div className="todo-list">
            <TodoInput value={todos} addItem={addItem}/>
            {todos.map((todoItem) =>
                <TodoItem key={todoItem.id} todoItem={todoItem} deleteItem={deleteItem} change={change}/>
            )}
        </div>
    </div>
  );
}

export default App;
