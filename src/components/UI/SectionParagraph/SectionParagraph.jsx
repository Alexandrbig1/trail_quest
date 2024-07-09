import PropTypes from "prop-types";
import { SectionParagraphText } from "./SectionParagraph.styled";

function SectionParagraph({ children }) {
  return <SectionParagraphText>{children}</SectionParagraphText>;
}

SectionParagraph.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SectionParagraph;
