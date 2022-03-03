
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { NavBar } from "./components/NavBar";
import { ProjectsPage } from "./components/ProjectsPage";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ProjectsPage" element={<ProjectsPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
