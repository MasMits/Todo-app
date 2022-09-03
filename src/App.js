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
        let _todos = [];
        todos.forEach((value, key) => {
            if(value.id === id) {
                return;
            }
            _todos[key] = value;
        })
        setTodos(_todos);
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

    function clearChecked(){
        let _todos = [];
        todos.forEach((value, key) => {
            if(value.isCompleted) {
                return;
            }
            _todos.push(value);
        })
        setTodos(_todos);
    }

    let isAllCheck = true;

    todos.forEach((value, key) => {
        if(value.isCompleted === true) return;
        isAllCheck = false;

    })

    function checkAllButton() {
        let _todos = [];
        todos.forEach((value, key) => {
            _todos[key] = value;
            _todos[key].isCompleted = !isAllCheck;
        })
        isAllCheck = !isAllCheck;
        setTodos(_todos);
    }

    return (
    <div className="app">
        <div className="todo-list">
            <TodoInput value={todos} addItem={addItem} checkAllButton={checkAllButton} isAllCheck={isAllCheck}/>
            {todosFilter(todos, filter).map((todoItem) =>
                <TodoItem key={todoItem.id} todoItem={todoItem} deleteItem={deleteItem} change={changeCheckBox} changeEditingMode={changeEditingMode} setItemTitle={setItemTitle}/>
            )}
            { todos.length ? <Footer todos={todos} setFilter={setFilter} clearChecked={clearChecked}/> : <div> </div>}
        </div>
    </div>
  );
}

export default App;
