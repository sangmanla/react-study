import React from "react";

function TodoItem({ todo, toggleTodo, removeTodo }) {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <span onClick={() => toggleTodo(todo)}>{todo.text}</span>
      <button onClick={() => removeTodo(todo)}>Delete</button>
    </li>
  );
}

export default TodoItem;
