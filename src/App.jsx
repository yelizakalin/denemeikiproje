import store from "./kaynak/store";
import { Provider } from "react-redux";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;