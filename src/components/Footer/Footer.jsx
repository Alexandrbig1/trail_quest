import Logo from "../UI/Logo/Logo";
import {
  FooterAuthorWrapper,
  FooterContainer,
  FooterInfoLink,
  FooterInfoText,
  FooterLinkWrapper,
  FooterWrapper,
} from "./Footer.styled";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <div>
          <Logo />
        </div>
        <FooterAuthorWrapper>
          <FooterInfoText>
            Alex Smagin &copy; Trail Quest{" "}
            <span>{new Date().getFullYear()}</span>. All rights reserved.
          </FooterInfoText>
          <FooterLinkWrapper>
            <FooterInfoLink to="privacy">Privacy Policy</FooterInfoLink>
            <span>/</span>
            <FooterInfoLink to="terms">Terms of Service</FooterInfoLink>
          </FooterLinkWrapper>
        </FooterAuthorWrapper>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
