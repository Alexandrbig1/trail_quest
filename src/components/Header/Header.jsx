import Logo from "../UI/Logo/Logo";
import { v4 as uuid } from "uuid";
import { useInView } from "react-intersection-observer";
import { HeaderNavLink, HeaderNavMenu, HeaderWrapper } from "./Header.styled";
import { useEffect, useState } from "react";
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

  // const options = {
  //   threshold: 0.5,
  // };

  // const { ref: homeRef, inView: homeInView } = useInView(options);
  // const { ref: aboutRef, inView: aboutInView } = useInView(options);
  // const { ref: featuresRef, inView: featuresInView } = useInView(options);
  // const { ref: contactRef, inView: contactInView } = useInView(options);

  // useEffect(() => {
  //   if (homeInView) {
  //     setActiveSection("home");
  //   } else if (aboutInView) {
  //     setActiveSection("about");
  //   } else if (featuresInView) {
  //     setActiveSection("features");
  //   } else if (contactInView) {
  //     setActiveSection("contact");
  //   }
  // }, [homeInView, aboutInView, featuresInView, contactInView]);

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
            <li key={uuid()}>
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
