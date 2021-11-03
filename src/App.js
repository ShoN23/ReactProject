import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Tools</h1>
      <Todo title='Learn React' />
      <Todo title='Master React' />
      <Todo title='Explore the full React course' />
      <Modal />
      <Backdrop />
    </div>
  );
}
export default App;
