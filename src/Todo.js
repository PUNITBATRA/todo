import React from "react";
import { Button } from "react-bootstrap";
export default function Todo({ todo, index, cancelTodo, deleteTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.done ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <Button variant="outline-success" onClick={() => cancelTodo(index)}>
          Cancel
        </Button>
        <Button variant="outline-danger" onClick={() => deleteTodo(index)}>
          Delete
        </Button>
      </div>
    </div>
  );
}
