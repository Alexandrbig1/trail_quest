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
      mainTextColorVeryLowOp: "#0c0a0910",
      paragraphTextColor: "#1c1917",
      mainBgColor: "#e2e8f0",
      aboutBgColor: "#94a3b8",
      secondaryBgColor: "#f9f9f9",
      secondaryBgColorLowOp: "#f9f9f970",
      accentColor: "#a2d2ff",
      accentDarkColor: "#3b82f6",
      heroOverlayColor: "#bde0fe80",
      heroSecondOverlayColor: "#219ebc80",
      headingTextColor: "#38bdf8",
      headingSecondaryTextColor: "#0077b6",
      whiteColor: "#fafaf9",
      whiteColorLowOp: "#fafaf990",
      whiteColorVeryLowOp: "#fafaf990",
      blackColor: "#0c0a09",
      blackColorVeryLowOp: "#0c0a0910",
      greenColor: "#7ed56f",
      greenColorLowOp: "#7ed56f85",
      blueColor: "#2998ff",
      blueColorLowOp: "#2998ff85",
      orangeColor: "#ffb900",
      orangeColorLowOp: "#ffb90085",
      greenColorDark: "#28b485",
      greenColorDarkLowOp: "#28b48585",
      blueColorDark: "#5643fa",
      blueColorDarkLowOp: "#5643fa85",
      orangeColorDark: "#ff7730",
      orangeColorDarkLowOp: "#ff773085",
      featuresCardBoxShadow: "rgba(0, 0, 0, 0.15)",
      greyColor: "#d6d3d1",
      inputColor: "#fafaf9",
    },
  },
  dark: {
    colors: {
      mainTextColor: "#fafaf9",
      mainTextColorLowOp: "#fafaf970",
      mainTextColorVeryLowOp: "#fafaf910",
      paragraphTextColor: "#fafaf990",
      mainBgColor: "#164e63",
      aboutBgColor: "#0369a1",
      secondaryBgColor: "#444",
      secondaryBgColorLowOp: "#44444470",
      accentColor: "#a2d2ff",
      accentDarkColor: "#3b82f6",
      heroOverlayColor: "#bde0fe80",
      heroSecondOverlayColor: "#219ebc80",
      headingTextColor: "#3b82f6",
      headingSecondaryTextColor: "#0077b6",
      whiteColor: "#fafaf9",
      whiteColorLowOp: "#fafaf990",
      whiteColorVeryLowOp: "#fafaf990",
      blackColor: "#0c0a09",
      blackColorVeryLowOp: "#0c0a0910",
      greenColor: "#7ed56f",
      greenColorLowOp: "#7ed56f85",
      blueColor: "#2998ff",
      blueColorLowOp: "#2998ff85",
      orangeColor: "#ffb900",
      orangeColorLowOp: "#ffb90085",
      greenColorDark: "#28b485",
      greenColorDarkLowOp: "#28b48585",
      blueColorDark: "#5643fa",
      blueColorDarkLowOp: "#5643fa85",
      orangeColorDark: "#ff7730",
      orangeColorDarkLowOp: "#ff773085",
      featuresCardBoxShadow: "rgba(255, 255, 255, 0.15)",
      greyColor: "#78716c",
      inputColor: "#44403c",
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
