import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "../../context/activeSection";
import {
  HeroButton,
  HeroContainer,
  HeroSubTitle,
  HeroTitleWrapper,
  HeroTitle,
  HeroWrapper,
} from "./Hero.styled";

const Hero = React.memo(() => {
  const { setActiveSection } = useActiveSection();
  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (homeInView) {
      setActiveSection("Home");
    }
  }, [homeInView, setActiveSection]);

  return (
    <HeroWrapper id="home" ref={homeRef}>
      <HeroContainer>
        <HeroTitleWrapper>
          <HeroTitle>
            Oregon's
            <br /> Hiking Adventures
          </HeroTitle>
          <HeroSubTitle>
            Discover the breathtaking beauty of Oregon with Trail Quest. Join us
            for guided hikes through scenic trails, from lush forests to rugged
            mountains. Your adventure awaits!
          </HeroSubTitle>
        </HeroTitleWrapper>
        <HeroButton>Discover our tours</HeroButton>
      </HeroContainer>
    </HeroWrapper>
  );
});

Hero.displayName = "Hero";

export default Hero;
