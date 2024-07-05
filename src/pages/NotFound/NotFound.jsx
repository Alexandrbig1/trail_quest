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
        <NotFoundText>404 Page Not Found</NotFoundText>
      </NotFoundWrapper>
    </>
  );
}

export default NotFound;
