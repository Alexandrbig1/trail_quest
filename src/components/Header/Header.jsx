import Logo from "../UI/Logo/Logo";
import { HeaderNavLink, HeaderNavMenu, HeaderWrapper } from "./Header.styled";
import { useActiveSection } from "../../context/activeSection";
import { useNavigate } from "react-router-dom";

const menuLists = [
  { to: "/home", list: "Home" },
  { to: "/about", list: "About" },
  { to: "/features", list: "Features" },
  { to: "/contact", list: "Contact" },
];

function Header() {
  const navigate = useNavigate();
  const { activeSection, setActiveSection } = useActiveSection();

  const handleLinkClick = (to) => {
    const sectionId = to.replace("/", "");
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(to);
    }
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
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(to);
                  setActiveSection(list);
                }}
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
