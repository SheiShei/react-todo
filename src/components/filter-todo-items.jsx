import React from "react";
import { SHOW_ALL, SHOW_NOT_COMPLETED, SHOW_COMPLETED } from "../constants";

function FilterTodoItems({ updateVisibilityFilter }) {
  return (
    <select onChange={updateVisibilityFilter}>
      <option value={SHOW_ALL}>All</option>
      <option value={SHOW_COMPLETED}>Completed</option>
      <option value={SHOW_NOT_COMPLETED}>Not yet complete</option>
    </select>
  );
}

export default FilterTodoItems;
