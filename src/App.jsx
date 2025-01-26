import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        navbar
        <div className="content">
          <Routes>
            <Route path="/" element={"home"} />
            <Route path="/about" element={"about"} />
            <Route path="/contact" element={"contact"} />
            <Route path="/projects" element={"section"} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
