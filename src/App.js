import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tasks from "./pages/Tasks";
import NewTask from "./pages/NewTask";
import SingleTask from "./pages/SingleTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/add" element={<NewTask />} />
        <Route path="/:id" element={<SingleTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
