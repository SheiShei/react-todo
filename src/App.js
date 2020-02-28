import React from "react";

import TodoList from "./components/todo-list";
import FilterTodoItems from "./components/filter-todo-items";
import AddTodoItem from "./components/add-todo-item";
import { SHOW_ALL } from "./constants";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{
					text: "Eat food",
					isCompleted: true
				},
				{
					text: "Exercise",
					isCompleted: false
				},
				{
					text: "Sleep",
					isCompleted: false
				}
			],
			visibilityFilter: SHOW_ALL
		};
	}

	updateTodoStatus = i => {
		const todos = [...this.state.todos];
		todos[i].isCompleted = !todos[i].isCompleted;
		this.setState({
			todos
		});
	};

	updateVisibilityFilter = (event) => {
		this.setState({
			visibilityFilter: event.target.value
		})
	}

	addTodoItem = (todo) => {
		let todos = [...this.state.todos];
		todos.push(todo);
		this.setState({
			todos
		})
	}

	render = () => (
		<div>
			<h1>Todo App</h1>
			<hr />
			<FilterTodoItems updateVisibilityFilter={this.updateVisibilityFilter} />
			<TodoList {...this.state} updateTodoStatus={this.updateTodoStatus} />
			<AddTodoItem addTodoItem={this.addTodoItem} />
		</div>
	);
}

export default App;
