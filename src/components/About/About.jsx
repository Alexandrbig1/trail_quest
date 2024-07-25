import { useInView } from "react-intersection-observer";
import HeadingSection from "../UI/Heading/Heading";
import { useActiveSection } from "../../context/activeSection";
import React, { useEffect } from "react";
import AboutImgWrap from "./AboutImgWrap";
import AboutTextWrap from "./AboutTextWrap";
import { AboutContainer, AboutWrapper } from "./About.styled";

const About = React.memo(() => {
  const { setActiveSection } = useActiveSection();

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (aboutInView) {
      setActiveSection("About");
    }
  }, [aboutInView, setActiveSection]);

  return (
    <AboutContainer id="about" ref={aboutRef}>
      <HeadingSection>Unforgettable Oregon Adventures Await</HeadingSection>
      <AboutWrapper>
        <AboutTextWrap />
        <AboutImgWrap />
      </AboutWrapper>
    </AboutContainer>
  );
});

About.displayName = "About";

export default About;
