import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components/index";

function App() {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
	};

	const updateTodo = (id, todo) => {
		setTodos((prev) =>
			prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo))
		);
	};

	const deleteTodo = (id) => {
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};

	const toggleComplete = (id) => {
		setTodos((prev) =>
			prev.map((prevTodo) =>
				prevTodo.id === id
					? { ...prevTodo, completed: !prevTodo.completed }
					: { prevTodo }
			)
		);
	};

	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem("todos"));
		if (todos && todos.length > 0) {
			setTodos(todos);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<>
			<h1>TODOS </h1>
			<h3>In React</h3>
			<br />
			<TodoProvider
				value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
			>
				<TodoForm />
				{todos.map((todo) => (
					<div key={todo.id}>
						<TodoItem todo={todo} />
					</div>
				))}
			</TodoProvider>
		</>
	);
}

export default App;
