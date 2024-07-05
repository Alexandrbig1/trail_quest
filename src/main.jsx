import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";
import Modal from "react-modal";
import { ActiveSectionContext } from "./context/activeSection.jsx";

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContext>
      <ActiveSectionContext>
        <App />
      </ActiveSectionContext>
    </ThemeContext>
  </React.StrictMode>
);
