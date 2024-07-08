import { useInView } from "react-intersection-observer";
import { useActiveSection } from "../../context/activeSection";
import { useEffect } from "react";
import { FeaturesContainer } from "./Features.styled";

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
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>Features</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
        commodi.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
        commodi.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
        commodi.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
        commodi.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
        commodi.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
        commodi.
      </p>
    </FeaturesContainer>
  );
}

export default Features;
