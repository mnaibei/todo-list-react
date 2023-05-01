import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputToDo from './InputTodo';
import ToDosList from './ToDosList';

const ToDosLogic = () => {
  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const addToDoItem = (title) => {
    // update state with users input
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    // update state
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          const theTitle = todo;
          theTitle.title = updatedTitle;
        }
        return todo;
      }),
    );
  };

  return (
    <div>
      <InputToDo addToDoItem={addToDoItem} />
      <ToDosList
        todosProps={todos}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    </div>
  );
};

export default ToDosLogic;
