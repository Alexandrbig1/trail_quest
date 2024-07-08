import { useInView } from "react-intersection-observer";
import HeadingSection from "../UI/Heading/Heading";
import { useActiveSection } from "../../context/activeSection";
import { useEffect } from "react";
import AboutImgWrap from "./AboutImgWrap";
import {
  AboutContainer,
  AboutHighlightBtn,
  AboutHighlightBtnIcon,
  AboutHighlightBtnText,
  AboutHighlightDescription,
  AboutHighlightTitle,
  AboutHighlightWrapper,
  AboutTitleWrapper,
  AboutWrapper,
} from "./About.styled";

function About() {
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
        <AboutImgWrap />
      </AboutWrapper>
    </AboutContainer>
  );
}

export default About;
