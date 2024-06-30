import { Helmet, HelmetProvider } from "react-helmet-async";
import { NotFoundText, NotFoundWrapper } from "./NotFound.styled";

function NotFound() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Trail Quest - Page Not Found</title>
          <meta name="description" content="" />
          <meta
            name="keywords"
            content=", 404, Page Not Found, error, missing page, software engineering"
          />
        </Helmet>
      </HelmetProvider>
      <NotFoundWrapper>
        {/* <NotFoundImg src="err.svg" alt="Error icon" /> */}
        <NotFoundText>
          Seventh Sense is a team of computer science students specializing in
          software engineering, always striving to innovate and solve
          challenging problems. While we haven't cracked the code to make this
          page appear, we invite you to explore our other amazing projects and
          get to know our talented team.
        </NotFoundText>
      </NotFoundWrapper>
    </>
  );
}

export default NotFound;
