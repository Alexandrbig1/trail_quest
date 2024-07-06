import { createContext, useContext, useState } from "react";

const ActiveContext = createContext();

// eslint-disable-next-line react/prop-types
export const ActiveSectionContext = ({ children }) => {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <ActiveContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useActiveSection = () => {
  const context = useContext(ActiveContext);
  if (!context) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionProvider"
    );
  }
  return context;
};
