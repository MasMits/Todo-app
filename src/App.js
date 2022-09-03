import './styles/App.css';
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import React, {useState} from 'react';
import Footer from "./components/Footer";

function App() {
    const [todos, setTodos] = useState([
          {id: 1, title:'Something', isCompleted: false},
          {id: 2, title:'Something 2', isCompleted: false},
          {id: 3, title:'Something 3', isCompleted: false},
        ]
    )

    const [filter, setFilter] = useState("All");

    function addItem(title) {
        console.log('test 1');
        if(title){
            const newItem = {
               id: Date.now(),
               title,
                isCompleted: false,
                isEditing: false,
            }
            setTodos([...todos, newItem]);
        }
    }


    function deleteItem(id) {
        console.log('test 2');
        setTodos(todos.filter(p => p.id !== id));

    }

    function changeCheckBox(id) {
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

    function changeEditingMode(id){
        let _todos = [];

        todos.forEach((value, key) => {
            _todos[key] = value;
            if(value.id === id) {
                _todos[key].isEditing = !_todos[key].isEditing;
            }
        })
        setTodos(_todos);
    }

    function setItemTitle(id, title){
        let _todos = [];

        todos.forEach((value, key) => {
            _todos[key] = value;
            if(value.id === id) {
                _todos[key].title = title;
            }
        })
        setTodos(_todos);
    }

    function todosFilter(todos, filter){
        switch(filter) {
            case "Active":
                return todos.filter(item => item.isCompleted === false);
            case "Checked":
                return todos.filter(item => item.isCompleted === true);
            default:
                return todos;
        }
    }

    return (
    <div className="app">
        <div className="todo-list">
            <TodoInput value={todos} addItem={addItem}/>
            {todosFilter(todos, filter).map((todoItem) =>
                <TodoItem key={todoItem.id} todoItem={todoItem} deleteItem={deleteItem} change={changeCheckBox} changeEditingMode={changeEditingMode} setItemTitle={setItemTitle}/>
            )}
            { todos.length ? <Footer setFilter={setFilter}/> : <div> </div>}
        </div>
    </div>
  );
}

export default App;
