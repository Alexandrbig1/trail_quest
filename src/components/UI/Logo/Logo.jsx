import { LogoImg, LogoText, LogoWrapper } from "./Logo.styled";

// eslint-disable-next-line react/prop-types
function Logo() {
  return (
    <LogoWrapper
      href="/"
      aria-label="Home Page"
      title="Go to Home Page"
      role="link"
    >
      <LogoImg src="/logo.svg" alt="" />
      <LogoText>Trail Quest</LogoText>
    </LogoWrapper>
  );
}

export default Logo;
