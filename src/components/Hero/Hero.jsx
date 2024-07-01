import { HeroButton, HeroTitle, HeroWrapper } from "./Hero.styled";

function Hero() {
  return (
    <HeroWrapper>
      <div>
        <HeroTitle>Trail Quest</HeroTitle>
        <span>Illinois Hiking Adventures</span>
      </div>
      <HeroButton>Discover our tours</HeroButton>
    </HeroWrapper>
  );
}

export default Hero;
