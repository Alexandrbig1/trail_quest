import { Helmet } from "react-helmet-async";
import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <>
      <Helmet>
        <title>Alex Smagin - Portfolio</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Trail Quest - Illinois Hiking Adventures"
        />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:site_name"
          content="Trail Quest Illinois Hiking Adventures"
        />
        <meta name="twitter:creator" content="@alexsmagin29" />
        <meta name="twitter:site" content="@alexsmagin29" />
      </Helmet>
      <div>
        <Hero />
      </div>
    </>
  );
}

export default Home;
