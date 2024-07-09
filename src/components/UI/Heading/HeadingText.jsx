import PropTypes from "prop-types";
import { AboutHighlightTitle } from "./Heading.styled";

function HeadingText({ children }) {
  return <AboutHighlightTitle>{children}</AboutHighlightTitle>;
}

HeadingText.propTypes = {
  children: PropTypes.string.isRequired,
};

export default HeadingText;
