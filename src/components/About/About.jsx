import HeadingSection from "../UI/Heading/Heading";
import { AboutWrapper } from "./About.styled";

function About() {
  return (
    <AboutWrapper>
      <HeadingSection>Unforgettable Oregon Adventures Await</HeadingSection>
      <div>
        <div>
          <h3>descriptio</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            deleniti!
          </p>
        </div>
        <div>
          <img src="#" alt="" />
        </div>
      </div>
    </AboutWrapper>
  );
}

export default About;
