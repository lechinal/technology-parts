import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./utils/variables.css";
import "./App.css";

// import Work from "./pages/Work/Work";
// import Loader from "./components/Loader/Loader.jsx";
// import Modal from "./components/Modal/Modal";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton.jsx";

//! Lazy imports
const Home = lazy(() => import("./pages/Home/Home"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const ProjectDetails = lazy(() =>
  import("./pages/ProjectDetails/ProjectDetails")
);
const Contact = lazy(() => import("./pages/Contact/Contact"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  const isGithubPages = import.meta.env.BASE_URL.includes("technology-parts");

  return (
    <BrowserRouter basename={isGithubPages ? "/technology-parts/" : "/"}>
      <ScrollToTop />
      <BackToTopButton />
      <Suspense fallback={null}>
        <div className="background-element"></div>
        <div className="app-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
