import Logo from "../UI/Logo/Logo";
import {
  HeaderNavLink,
  HeaderNavMenu,
  HeaderNavWrapper,
  HeaderWrapper,
} from "./Header.styled";
import { useActiveSection } from "../../context/activeSection";
import { useNavigate } from "react-router-dom";
import MenuLists from "../../data/menuLists";
import MemoizedThemeSwitcher from "../UI/ThemeSwitcher/ThemeSwitcher";

function Header() {
  const navigate = useNavigate();
  const { activeSection, setActiveSection } = useActiveSection();

  const handleLinkClick = (e, to, list) => {
    e.preventDefault();
    const sectionId = to.replace("/", "");
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(to);
    }

    setActiveSection(list);
  };

  return (
    <HeaderWrapper>
      <Logo />
      <HeaderNavWrapper>
        <nav>
          <HeaderNavMenu>
            {MenuLists.map(({ to, list }) => (
              <li key={to}>
                <HeaderNavLink
                  href={to}
                  onClick={(e) => handleLinkClick(e, to, list)}
                  $active={activeSection === list}
                >
                  {list}
                </HeaderNavLink>
              </li>
            ))}
          </HeaderNavMenu>
        </nav>
        <MemoizedThemeSwitcher />
      </HeaderNavWrapper>
    </HeaderWrapper>
  );
}

export default Header;
