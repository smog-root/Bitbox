import './App.css'
import About from './component/About';
import Footer from './component/Footer'
import Home from './component/Home';
import Navbar from './component/Navbar'
import ProjectState from './context/ProjectState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
      <ProjectState>
        <Router>
          <Navbar title="Open Source" home="Home" about="About us" />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
        <Footer />
      </ProjectState>
    </>
  )
}

export default App