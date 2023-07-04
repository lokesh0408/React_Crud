// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import "./App.css";
import Update from "./components/Update";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
