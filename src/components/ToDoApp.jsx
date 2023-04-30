import Header from "./Header";
import ToDosLogic from "./ToDologic";

const ToDoApp = () => {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header />
        <ToDosLogic />
      </div>
    </div>
  );
}

export default ToDoApp