import { useState, Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./utils/variables.css";
import "./App.css";

import Work from "./pages/Work/Work";
import Loader from "./components/Loader/Loader.jsx";
import Modal from "./components/Modal/Modal";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";

//! Lazy imports
const Home = lazy(() => import("./pages/Home/Home"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const ProjectDetails = lazy(() =>
  import("./pages/ProjectDetails/ProjectDetails")
);
const Contact = lazy(() => import("./pages/Contact/Contact"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  const [loading, setLoading] = useState(true);
  const [showFadeIndicator, setShowFadeIndicator] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);

    const handleScroll = () => {
      // pt debugging
      // console.log("ScrollY:", window.scrollY);

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isAtBottom = scrollY + windowHeight >= documentHeight - 100;

      if (scrollY > 4000 || isAtBottom) {
        setShowFadeIndicator(false);
      } else {
        setShowFadeIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Apelează o data la inceput sa verifice starea initiala
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) return <Loader />;

  const isGithubPages = import.meta.env.BASE_URL.includes("technology-parts");

  return (
    <BrowserRouter basename={isGithubPages ? "/technology-parts/" : "/"}>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <div className="app-wrapper">
          {/* <div className="page-center"> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* </div> */}

          {/* EFECTUL DE FADE(scroll-fade-indicator) LA BAZA ECRANULUI */}
          <div
            className={`scroll-fade-indicator ${
              !showFadeIndicator ? "hidden" : ""
            }`}
          ></div>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
