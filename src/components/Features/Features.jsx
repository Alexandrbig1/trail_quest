import { useInView } from "react-intersection-observer";
import { useActiveSection } from "../../context/activeSection";
import { useEffect } from "react";
import {
  FeaturesContainer,
  FeaturesIcon,
  FeaturesIconWrapper,
  FeaturesMenu,
  FeaturesMenuItems,
} from "./Features.styled";
import HeadingText from "../UI/Heading/HeadingText";
import SectionParagraph from "../UI/SectionParagraph/SectionParagraph";
import FeaturesData from "../../data/featuresData.json";
import { Container } from "../layout";

function Features() {
  const { setActiveSection } = useActiveSection();

  const { ref: featuresRef, inView: featuresInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (featuresInView) {
      setActiveSection("Features");
    }
  }, [featuresInView, setActiveSection]);

  return (
    <FeaturesContainer id="features" ref={featuresRef}>
      <Container>
        <FeaturesMenu>
          {FeaturesData.map(({ id, title, iconImg, description }) => (
            <FeaturesMenuItems key={id}>
              <FeaturesIconWrapper>
                <FeaturesIcon aria-label={title}>
                  <use href={iconImg}></use>
                </FeaturesIcon>
              </FeaturesIconWrapper>
              <HeadingText>{title}</HeadingText>
              <SectionParagraph>{description}</SectionParagraph>
            </FeaturesMenuItems>
          ))}
        </FeaturesMenu>
      </Container>
    </FeaturesContainer>
  );
}

export default Features;
