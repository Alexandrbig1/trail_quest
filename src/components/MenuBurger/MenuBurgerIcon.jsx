import { useTheme } from "../../context/ThemeContext";
import {
  IconMenu,
  IconMenuWrapper,
  MenuBurgerContainer,
} from "./MenuBurger.styled";

// eslint-disable-next-line react/prop-types
function MenuBurgerIcon() {
  const { toggleMenu } = useTheme();

  return (
    <MenuBurgerContainer>
      <IconMenuWrapper onClick={toggleMenu}>
        <IconMenu />
      </IconMenuWrapper>
    </MenuBurgerContainer>
  );
}

export default MenuBurgerIcon;
