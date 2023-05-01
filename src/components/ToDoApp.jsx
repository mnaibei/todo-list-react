import Header from './Header';
import ToDosLogic from './ToDologic';
import Footer from './footer';

const ToDoApp = () => (
  <div className="wrapper">
    <div className="todos">
      <Header />
      <ToDosLogic />
    </div>
    <Footer />
  </div>

);

export default ToDoApp;
