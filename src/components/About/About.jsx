import { useInView } from "react-intersection-observer";
import HeadingSection from "../UI/Heading/Heading";
import {
  AboutContainer,
  AboutHighlightBtn,
  AboutHighlightBtnIcon,
  AboutHighlightBtnText,
  AboutHighlightDescription,
  AboutHighlightTitle,
  AboutHighlightWrapper,
  AboutImageFirst,
  AboutImageSecond,
  AboutImageThird,
  AboutImageWrapper,
  AboutTitleWrapper,
  AboutWrapper,
} from "./About.styled";

function About() {
  const { aboutRef } = useInView({ threshold: 0.5 });

  return (
    <AboutContainer id="about" ref={aboutRef}>
      <HeadingSection>Unforgettable Oregon Adventures Await</HeadingSection>
      <AboutWrapper>
        <AboutHighlightWrapper>
          <AboutTitleWrapper>
            <AboutHighlightTitle>
              The Natural Beauty of Oregon
            </AboutHighlightTitle>
            <AboutHighlightDescription>
              Oregon is a state of diverse landscapes, from the lush forests of
              the Pacific Northwest to the rugged coastline and majestic
              mountains. Three of the most visited places in Oregon include the
              awe-inspiring Crater Lake, the stunning Columbia River Gorge, and
              the iconic Multnomah Falls. Each destination offers unique
              opportunities to experience the breathtaking beauty and natural
              wonders that Oregon has to offer.
            </AboutHighlightDescription>
          </AboutTitleWrapper>
          <AboutTitleWrapper>
            <AboutHighlightTitle>About Our Company</AboutHighlightTitle>
            <AboutHighlightDescription>
              Since 1973, our company has been dedicated to providing
              exceptional tours and hiking adventures across Oregon. We cater to
              adventurous people who seek to explore the hidden gems and scenic
              trails of this beautiful state. With decades of experience and a
              passion for nature, we ensure that every tour is a memorable and
              enriching experience.
            </AboutHighlightDescription>
          </AboutTitleWrapper>
          <AboutHighlightBtn
            type="button"
            aria-label="Learn More About Our Company"
          >
            <AboutHighlightBtnText>Learn More</AboutHighlightBtnText>
            <AboutHighlightBtnIcon />
          </AboutHighlightBtn>
        </AboutHighlightWrapper>
        <AboutImageWrapper>
          <picture>
            <source
              srcSet="images/about1_mobile.jpg 640w"
              media="(max-width: 640px)"
              type="image/jpg"
            />
            <source
              srcSet="images/about1_desktop.jpg 1920w"
              media="(min-width: 641px) and (max-width: 1919px)"
              type="image/jpg"
            />
            <source
              srcSet="images/about1_desktop@2x.jpg 2400w"
              media="(min-width: 1920px)"
              type="image/jpg"
            />
            <AboutImageFirst
              src="images/about1_mobile.jpg"
              alt="Scenic view of Crater Lake in Oregon with clear blue water and surrounding cliffs"
              loading="lazy"
            />
          </picture>
          <picture>
            <source
              srcSet="images/about2_mobile.jpg 640w"
              media="(max-width: 640px)"
              type="image/jpg"
            />
            <source
              srcSet="images/about2_desktop.jpg 1920w"
              media="(min-width: 641px) and (max-width: 1919px)"
              type="image/jpg"
            />
            <source
              srcSet="images/about2_desktop@2x.jpg 2400w"
              media="(min-width: 1920px)"
              type="image/jpg"
            />
            <AboutImageSecond
              src="images/about2_mobile.jpg"
              alt="Scenic view of Columbia River Gorge with towering cliffs, lush greenery, and the Columbia River flowing through"
              loading="lazy"
            />
          </picture>
          <picture>
            <source
              srcSet="images/about3_mobile.jpg 640w"
              media="(max-width: 640px)"
              type="image/jpg"
            />
            <source
              srcSet="images/about3_desktop.jpg 1920w"
              media="(min-width: 641px) and (max-width: 1919px)"
              type="image/jpg"
            />
            <source
              srcSet="images/about3_desktop@2x.jpg 2400w"
              media="(min-width: 1920px)"
              type="image/jpg"
            />
            <AboutImageThird
              src="images/about3_mobile.jpg"
              alt="Scenic view of Multnomah Falls cascading down a lush green cliff in the Columbia River Gorge area of Oregon"
              loading="lazy"
            />
          </picture>
        </AboutImageWrapper>
      </AboutWrapper>
    </AboutContainer>
  );
}

export default About;
