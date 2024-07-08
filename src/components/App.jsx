import { lazy } from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { GlobalStyle } from "./GlobalStyle";
import FontsHelmet from "./FontsHelmet";
import RootLayout from "../layouts/RootLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const theme = {
  light: {
    colors: {
      mainTextColor: "#0c0a09",
      mainTextColorLowOp: "#0c0a0970",
      // paragraphTextColor: "#0c0a0990",
      paragraphTextColor: "#1c1917",
      secondaryTextColor: "#777",
      mainBgColor: "#e2e8f0",
      aboutBgColor: "#94a3b8",
      secondaryBgColor: "#f9f9f9",
      accentColor: "#a2d2ff",
      accentDarkColor: "#3b82f6",
      heroOverlayColor: "#bde0fe80",
      heroSecondOverlayColor: "#219ebc80",
      headingTextColor: "#38bdf8",
      headingSecondaryTextColor: "#0077b6",
    },
  },
  dark: {
    colors: {
      mainTextColor: "#fafaf9",
      mainTextColorLowOp: "#fafaf970",
      paragraphTextColor: "#fafaf990",
      secondaryTextColor: "#ccc",
      mainBgColor: "#164e63",
      aboutBgColor: "#0369a1",
      secondaryBgColor: "#444",
      accentColor: "#a2d2ff",
      accentDarkColor: "#3b82f6",
      heroOverlayColor: "#bde0fe80",
      heroSecondOverlayColor: "#219ebc80",
      headingTextColor: "#3b82f6",
      headingSecondaryTextColor: "#0077b6",
    },
  },
};

function App() {
  const { isDarkTheme } = useTheme();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
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
