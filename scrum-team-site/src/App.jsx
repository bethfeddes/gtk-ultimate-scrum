import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Members from "./pages/Members";


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <aside className="sidebar">
          <h1 className="sidebar-title">The ULTIMATE Null Pointers</h1>
          <hr />
          <nav className="navigation">
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/members">Members</a>
          </nav>
        </aside>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;