import { Helmet } from "react-helmet-async";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import { Container } from "../../components/layout";
import Features from "../../components/Features/Features";
import Tours from "../../components/Tours/Tours";
import { lazy, Suspense } from "react";

const Testimonials = lazy(() =>
  import("../../components/Testimonials/Testimonials")
);
const Contact = lazy(() => import("../../components/Contact/Contact"));
const Sponsor = lazy(() => import("../../components/Sponsor/Sponsor"));
const Subscribe = lazy(() => import("../../components/Subscribe/Subscribe"));

function Home() {
  return (
    <>
      <Helmet>
        <title>Trail Quest</title>
        <meta
          name="description"
          content="Join Trail Quest for unforgettable hiking adventures across Oregon's stunning landscapes. Discover hidden trails, breathtaking views, and connect with nature like never before."
        />
        <meta
          name="keywords"
          content="Trail Quest, Oregon hiking tours, hiking adventures, Oregon trails, nature tours, outdoor activities"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Trail Quest: Oregon's Hiking Adventures"
        />
        <meta
          property="og:description"
          content="Join Trail Quest for unforgettable hiking adventures across Oregon's stunning landscapes. Discover hidden trails, breathtaking views, and connect with nature like never before."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="Trail Quest" />
        <meta name="twitter:creator" content="@alexsmagin29" />
        <meta name="twitter:site" content="@alexsmagin29" />
      </Helmet>
      <Hero />
      <Container>
        <About />
      </Container>
      <Features />
      <Container>
        <Tours />
      </Container>
      <Suspense fallback={null}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
      <Suspense fallback={null}>
        <Sponsor />
      </Suspense>
      <Suspense fallback={null}>
        <Subscribe />
      </Suspense>
    </>
  );
}

export default Home;
