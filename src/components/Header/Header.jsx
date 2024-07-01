import Logo from "../UI/Logo/Logo";
import { HeaderWrapper, LogoWrap } from "./Header.styled";

function Header() {
  return (
    <HeaderWrapper>
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <nav>nav</nav>
    </HeaderWrapper>
  );
}

export default Header;
