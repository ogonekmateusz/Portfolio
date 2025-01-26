import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import "./components/Navbar/navbar.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={""} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
