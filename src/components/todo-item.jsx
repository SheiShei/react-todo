import React from "react";

function TodoItem({ text, isCompleted, updateTodoStatus, i }) {
  return (
    <li
      onClick={() => {
        updateTodoStatus(i);
      }}
      className={isCompleted ? "blue completed" : "red"}
    >
      {text}
    </li>
  );
}

export default TodoItem;
