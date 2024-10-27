import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
const ToDoApp = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    setTodos([...todos, { id: Math.random(), text: text, completed: false }]);
    console.log(todos);
  };

  const toggleTodo = (todo) => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const removeTodo = (todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          ></TodoItem>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
