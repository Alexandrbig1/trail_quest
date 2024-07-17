import { Suspense } from "react";
import { Outlet } from "react-router";
import MenuBurger from "../components/MenuBurger/MenuBurger";
import Loader from "../components/UI/Loader/Loader";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { MainContainer, RootLayoutContainer } from "../components/layout";

// eslint-disable-next-line react/prop-types
function RootLayout() {
  return (
    <RootLayoutContainer>
      <Header />
      <MenuBurger />
      <MainContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContainer>
      <Footer />
    </RootLayoutContainer>
  );
}

export default RootLayout;
