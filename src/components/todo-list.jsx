import React from "react";
import _ from "lodash";

import TodoItem from "./todo-item";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_NOT_COMPLETED } from "../constants";

function TodoList({ todos, visibilityFilter, updateTodoStatus }) {
	// filter todos array based on visibility value
  const todoList = _.reduce(
    todos,
    (t, todo, i) => {
      const filter = visibilityFilter;
      if (
        filter === SHOW_ALL ||
        (filter === SHOW_COMPLETED && todo.isCompleted) ||
        (filter === SHOW_NOT_COMPLETED && !todo.isCompleted)
      ) {
        t.push(
          <TodoItem key={i} i={i} {...todo} updateTodoStatus={updateTodoStatus} />
        );
      }
      return t;
    },
    []
  );

  return <ul>{todoList}</ul>;
}

export default TodoList;
