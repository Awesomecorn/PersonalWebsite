 'use client'
import NavBar from "../components/navBar";
import {BrowserRouter as Router} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
 import Home from "../pages/home";
 import About from "../pages/about";
import Projects from "../pages/projects";

export default function HomePage() {
  return (
    <nav>
    <NavBar />
    </nav>
  );
}



{/* <Router>
  <NavBar />
  <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
</Router> */}