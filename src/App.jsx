import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Modal from "./components/Modal/Modal";

import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

// import projects from "./utils/projects";

function App() {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (page) => {
    switch (page) {
      case "work":
        setModalContent(<Work previewMode closeModal={closeModal} />);
        break;
      case "about":
        setModalContent(<About />);
        break;
      case "contact":
        setModalContent(<Contact />);
        break;
      default:
        setModalContent(null);
    }
  };

  const closeModal = () => setModalContent(null);

  const isGithubPages = import.meta.env.BASE_URL.includes("technology-parts");

  return (
    <BrowserRouter basename={isGithubPages ? "/technology-parts/" : "/"}>
      <div className="app-wrapper">
        <div className="page-center">
          <Routes>
            <Route path="/" element={<Home openModal={openModal} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Modal isOpen={!!modalContent} onClose={closeModal}>
          {modalContent}
        </Modal>
      </div>
    </BrowserRouter>
  );
}

export default App;
