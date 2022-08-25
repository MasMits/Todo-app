import './styles/App.css';
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import React, {useState} from 'react';

function App() {
const [todos, setTodos] = useState([
      {id: 1, title:'Smth', isComplited: false},
      {id: 2, title:'Smth2', isComplited: false},
      {id: 3, title:'Smth3', isComplited: false},
    ]
)
  const addItem = (e) => {
    // setTodos([...todos, {
    //   id: Date.now(),
    //   children, //title
    //   isComplited: false
    // }
  }

  return (
    <div className="App">

      <TodoInput
          value={todos}
      />
      {todos.map((todoItem) =>
          <div
              className = "player-wrapper"
              key= {todoItem.id}>
            <TodoItem todoItem={todoItem} key= {todoItem.id} />
          </div>
      )}
    </div>
  );
}

export default App;
