import { Helmet } from "react-helmet-async";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import { Container } from "../../components/layout";
import Features from "../../components/Features/Features";
import Contact from "../../components/Contact/Contact";

function Home() {
  return (
    <>
      <Helmet>
        <title>Alex Smagin - Portfolio</title>
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
      <main>
        <Hero />
        <Container>
          <About />
          <Features />
          <Contact />
        </Container>
      </main>
    </>
  );
}

export default Home;
