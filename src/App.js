import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Tasks from "./Pages/Tasks";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tasks" element={<Tasks />} />
      </Routes>
    </Router>
  );
}

export default App;