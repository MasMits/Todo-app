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
  const addItem = () => {}
  const deleteItem = () => {}
  const change = () => {}

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
