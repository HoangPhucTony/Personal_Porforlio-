import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// F5 on the home page replays the cover from the start; a refreshed case-study page stays where it is.
// Runs before the router reads the URL, so the dropped #hash never scrolls the page.
const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
if (nav?.type === "reload" && !window.location.pathname.startsWith("/projects/")) {
  try {
    sessionStorage.removeItem("introSeen");
  } catch {
    /* storage unavailable */
  }
  if (window.location.hash) history.replaceState(history.state, "", window.location.pathname + window.location.search);
  window.scrollTo(0, 0);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
