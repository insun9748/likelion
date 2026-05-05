import React, { useState } from 'react';
import add from '../assets/img/add.png'
import deleteimg from '../assets/img/deleteimg.png'
import '../assets/style.scss'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input.trim() === '') {
            alert('내용을 입력해주세요');
            return;
        }
        setTodos([...todos, { id: Date.now(), text: input, checked: false }]);
        setInput('');
    };

    const checkTodo = (id) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
        ));
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="wrap">
            <header>
                <h1>TO-DO LIST</h1>
                <div className="add">
                    <input
                        type="text"
                        placeholder="오늘 할 일을 입력해주세요!"
                        className="addvalue"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={addTodo}>
                        <img src={add} alt="추가" />
                    </button>
                </div>
            </header>
            <main>
                {todos.map((todo) => (
                    <div className="list" key={todo.id}>
                        <div className="leftBox">
                            <input
                                type="checkbox"
                                className="checkBox"
                                checked={todo.checked}
                                onChange={() => checkTodo(todo.id)}
                            />
                            <p className="todoText" style={todo.checked ? { textDecoration: 'line-through' } : {}}>{todo.text}</p>
                        </div>
                        <button className="removeBtn" onClick={() => removeTodo(todo.id)}>
                            <img src={deleteimg} alt="삭제" />
                        </button>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Todo;