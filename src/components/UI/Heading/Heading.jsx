import { HeadingSectionTitle } from "./Heading.styled";

// eslint-disable-next-line react/prop-types
function HeadingSection({ children }) {
  return <HeadingSectionTitle>{children}</HeadingSectionTitle>;
}

export default HeadingSection;
