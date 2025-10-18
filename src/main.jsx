import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "/src/utils/variables.css";
import "./App.css";

import App from "./App.jsx";

// IMPORT FAVICONS DIN SRC
// -----------------------
import iPhoneFavicon from "./assets/favicons/iPhone.png";
import AndroidFavicon from "./assets/favicons/Android.png";
import BrowserFavicon from "./assets/favicons/browser.png";

// FUNCTIE PENTRU SETAREA FAVICONULUI
const setFavicon = (href, rel = "icon", sizes) => {
  const link = document.createElement("link");
  link.rel = rel;
  if (sizes) link.sizes = sizes;
  link.href = href;
  document.head.appendChild(link);
};

// ADAUGA FAVICONS IN HEAD
setFavicon(iPhoneFavicon, "apple-touch-icon", "180x180");
setFavicon(AndroidFavicon, "icon", "196x196");
setFavicon(BrowserFavicon, "icon", "32x32");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
