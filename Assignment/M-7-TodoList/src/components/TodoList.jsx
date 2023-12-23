import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    const completedTodo = todos[index];
    setTodos(updatedTodos);
    setCompletedTodos([...completedTodos, completedTodo]);
  };

  const handleDeleteTodo = (index, isCompleted) => {
    if (isCompleted) {
      const filteredCompletedTodos = completedTodos.filter(
        (_, i) => i !== index
      );
      setCompletedTodos(filteredCompletedTodos);
    } else {
      const filteredTodos = todos.filter((_, i) => i !== index);
      setTodos(filteredTodos);
    }
  };

  return (
    <div className="TodoList">
      <div className="TodoInner">
        <h1>Todo List</h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your task..."
        />
        <button className="add" onClick={handleAddTodo}>
          Add
        </button>
        <div>
          <h2>Add List:</h2>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                <span>{todo.text}</span>
                <button
                  className="complete"
                  onClick={() => handleToggleComplete(index)}
                >
                  Complete
                </button>
                <button
                  className="delete"
                  onClick={() => handleDeleteTodo(index, false)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Completed List:</h2>
          <ul className="Complete-Task">
            {completedTodos.map((completedTodo, index) => (
              <li key={index}>
                <span>{completedTodo.text}</span>
                <button
                  className="delete"
                  onClick={() => handleDeleteTodo(index, true)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
