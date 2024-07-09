import PropTypes from "prop-types";
import { HeadingSectionTitle } from "./Heading.styled";

function HeadingSection({ children }) {
  return <HeadingSectionTitle>{children}</HeadingSectionTitle>;
}

HeadingSection.propTypes = {
  children: PropTypes.string.isRequired,
};

export default HeadingSection;
