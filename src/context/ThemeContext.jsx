import { createContext, useContext, useState } from "react";

const Theme = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeContext = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem("isDarkMode") === "light" ? true : false;
  });

  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
    localStorage.setItem("isDarkMode", isDarkTheme ? "dark" : "light");
  };

  return (
    <Theme.Provider
      value={{
        isDarkTheme,
        toggleTheme,
      }}
    >
      {children}
    </Theme.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(Theme);
  if (!context) {
    throw new Error("useTheme must be used within an ThemeProvider");
  }
  return context;
};
