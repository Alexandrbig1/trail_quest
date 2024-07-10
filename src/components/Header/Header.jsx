import Logo from "../UI/Logo/Logo";
import { HeaderNavLink, HeaderNavMenu, HeaderWrapper } from "./Header.styled";
import { useActiveSection } from "../../context/activeSection";
import { useNavigate } from "react-router-dom";

const menuLists = [
  { to: "/home", list: "Home" },
  { to: "/about", list: "About" },
  { to: "/features", list: "Features" },
  { to: "/tours", list: "Tours" },
  { to: "/reviews", list: "Reviews" },
  { to: "/contact", list: "Contact" },
];

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
      <nav>
        <HeaderNavMenu>
          {menuLists.map(({ to, list }) => (
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
    </HeaderWrapper>
  );
}

export default Header;
