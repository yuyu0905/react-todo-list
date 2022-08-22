import { Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import '@fortawesome/fontawesome-free/js/all.js';
import "./scss/all.css"


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
