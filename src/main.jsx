import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";
import Modal from "react-modal";
import { ActiveSectionContext } from "./context/activeSection.jsx";
import { MenuContext } from "./context/ToggleMenuContext.jsx";

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContext>
      <MenuContext>
        <ActiveSectionContext>
          <App />
        </ActiveSectionContext>
      </MenuContext>
    </ThemeContext>
  </React.StrictMode>
);
