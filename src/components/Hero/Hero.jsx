import {
  HeroButton,
  HeroSubTitle,
  HeroTItleWrapper,
  HeroTitle,
  HeroWrapper,
} from "./Hero.styled";

function Hero() {
  return (
    <HeroWrapper>
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
    </HeroWrapper>
  );
}

export default Hero;
