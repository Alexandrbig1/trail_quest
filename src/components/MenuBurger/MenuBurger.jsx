// import SocialIcons from "../SocialIcons/SocialIcons";
// import { useTheme } from "../../context/ThemeContext";
// import FooterRightsText from "../UI/FooterRightsText/FooterRightsText";
import {
  // BurgerContainer,
  // CloseBurgerMenu,
  Menu,
  // BurgerMenuItems,
  // BurgerLogoWrapper,
  // MenuBurgerText,
  // MenuBurgerLinkIcon,
  // MenuBurgerItems,
  // BurgerMenuFooterWrapper,
  // CloseBurgerIcon,
} from "./MenuBurger.styled";

// eslint-disable-next-line react/prop-types
export default function MenuBurger() {
  // const { toggleMenu, menuOpen } = useTheme();

  return (
    <Menu>
      {/* <Menu $isOpen={menuOpen}> */}
      {/* <CloseBurgerMenu
        type="button"
        aria-label="Close Menu"
        onClick={toggleMenu}
      >
        <CloseBurgerIcon />
      </CloseBurgerMenu>
      <BurgerContainer>
        <nav>
          <BurgerMenuItems>
            <MenuBurgerItems onClick={toggleMenu}>
              <MenuBurgerText to="/landing_team/" end>
                <MenuBurgerLinkIcon />
                Home
              </MenuBurgerText>
            </MenuBurgerItems>
            <MenuBurgerItems onClick={toggleMenu}>
              <MenuBurgerText to="team" end>
                <MenuBurgerLinkIcon />
                Team
              </MenuBurgerText>
            </MenuBurgerItems>
            <MenuBurgerItems onClick={toggleMenu}>
              <MenuBurgerText to="projects" end>
                <MenuBurgerLinkIcon />
                Projects
              </MenuBurgerText>
            </MenuBurgerItems>
          </BurgerMenuItems>
        </nav>
      </BurgerContainer>
      <BurgerMenuFooterWrapper>
        <BurgerLogoWrapper>
          <SocialIcons color="#7289d9" />
        </BurgerLogoWrapper>
        <FooterRightsText />
      </BurgerMenuFooterWrapper> */}
    </Menu>
  );
}
