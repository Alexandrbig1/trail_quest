import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";
import Modal from "react-modal";

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContext>
      <App />
    </ThemeContext>
  </React.StrictMode>
);
