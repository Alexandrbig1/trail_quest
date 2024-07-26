import { createContext, useContext, useState } from "react";

const Menu = createContext();

// eslint-disable-next-line react/prop-types
export const MenuContext = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <Menu.Provider
      value={{
        toggleMenu,
        menuOpen,
      }}
    >
      {children}
    </Menu.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMenu = () => {
  const context = useContext(Menu);
  if (!context) {
    throw new Error("useMenu must be used within an MenuProvider");
  }
  return context;
};
