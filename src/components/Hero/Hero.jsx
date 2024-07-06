import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "../../context/activeSection";
import {
  HeroButton,
  HeroContainer,
  HeroSubTitle,
  HeroTItleWrapper,
  HeroTitle,
  HeroWrapper,
} from "./Hero.styled";

function Hero() {
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
        <HeroTItleWrapper>
          <HeroTitle>
            Oregon's
            <br /> Hiking Adventures
          </HeroTitle>
          <HeroSubTitle>
            Discover the breathtaking beauty of Oregon with Trail Quest. Join us
            for guided hikes through scenic trails, from lush forests to rugged
            mountains. Your adventure awaits!
          </HeroSubTitle>
        </HeroTItleWrapper>
        <HeroButton>Discover our tours</HeroButton>
      </HeroContainer>
    </HeroWrapper>
  );
}

export default Hero;
