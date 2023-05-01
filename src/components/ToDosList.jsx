import ToDoItem from './ToDoItem';

const ToDosList = ({
  todosProps, handleChange, delTodo, setUpdate,
}) => (
  <ul>
    {todosProps.map((todo) => (
      <ToDoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

export default ToDosList;
