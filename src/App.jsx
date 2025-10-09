import { useState, Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Modal from "./components/Modal/Modal";
import Loader from "./components/Loader/Loader";

//! Lazy imports
const Home = lazy(() => import("./pages/Home/Home"));
const Work = lazy(() => import("./pages/Work/Work"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const ProjectDetails = lazy(() =>
  import("./pages/ProjectDetails/ProjectDetails")
);
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Services = lazy(() => import("./pages/Services/Services"));

function App() {
  const [modalContent, setModalContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  const openModal = (page) => {
    switch (page) {
      case "work":
        setModalContent(<Work previewMode closeModal={closeModal} />);
        break;
      case "about":
        setModalContent(<About closeModal={closeModal} />);
        break;
      case "services":
        setModalContent(<Services closeModal={closeModal} />);
        break;
      case "contact":
        setModalContent(<Contact previewMode closeModal={closeModal} />);
        break;
      default:
        setModalContent(null);
    }
  };

  const closeModal = () => setModalContent(null);

  const isGithubPages = import.meta.env.BASE_URL.includes("technology-parts");

  return (
    <BrowserRouter basename={isGithubPages ? "/technology-parts/" : "/"}>
      <Suspense fallback={<Loader />}>
        {/* <div className="app-wrapper"> */}
        <div className="page-center">
          <Routes>
            <Route path="/" element={<Home openModal={openModal} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Modal isOpen={!!modalContent} onClose={closeModal}>
          {modalContent}
        </Modal>
        {/* </div> */}
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
