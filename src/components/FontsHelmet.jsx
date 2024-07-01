import { Helmet } from "react-helmet-async";

const FontsHelmet = () => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=DM+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default FontsHelmet;
