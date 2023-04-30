import InputToDo from "./InputTodo";
import ToDosList from "./ToDosList"
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ToDosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => {
      return todo.id !== id
    })])
  };

  const addToDoItem = (title) => {
    //update state with users input
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo])
  }

  const setUpdate = (updatedTitle, id) => {
    // update state
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <InputToDo addToDoItem={addToDoItem} />
      <ToDosList todosProps={todos} handleChange={handleChange} delTodo={delTodo} setUpdate={setUpdate} />
    </div>
  )
}

export default ToDosLogic;