import { ThemeProvider } from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { GlobalStyle } from "./GlobalStyle";
import FontsHelmet from "./FontsHelmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";
import { theme } from "../theme/theme";
import router from "../router/router";
import { RouterProvider } from "react-router-dom";

function App() {
  const { isDarkTheme } = useTheme();

  return (
    <HelmetProvider>
      <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
        <GlobalStyle />
        <FontsHelmet />
        <ToastContainer />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
