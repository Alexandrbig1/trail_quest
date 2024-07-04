import { Suspense } from "react";
import { Outlet } from "react-router";
// import Footer from "../components/Footer/Footer";
// import { Main } from "../components/layout";
import MenuBurger from "../components/MenuBurger/MenuBurger";
import Loader from "../components/UI/Loader/Loader";
import Header from "../components/Header/Header";

// eslint-disable-next-line react/prop-types
function RootLayout() {
  return (
    <div>
      <Header />
      <MenuBurger />
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default RootLayout;
