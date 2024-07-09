import { useInView } from "react-intersection-observer";
import { useActiveSection } from "../../context/activeSection";
import { useEffect } from "react";
import {
  ToursItemBack,
  ToursContainer,
  ToursItem,
  ToursItemFront,
  ToursMenu,
  ToursItemImgFirst,
  ToursItemBackSecond,
  ToursItemBackThird,
} from "./Tours.styled";
import HeadingSection from "../UI/Heading/Heading";

function Tours() {
  const { setActiveSection } = useActiveSection();

  const { ref: toursRef, inView: toursInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (toursInView) {
      setActiveSection("Tours");
    }
  }, [toursInView, setActiveSection]);
  return (
    <ToursContainer id="tours" ref={toursRef}>
      <HeadingSection>Most popular tours</HeadingSection>
      <ToursMenu>
        <ToursItem>
          <ToursItemFront>
            <ToursItemImgFirst />
            <h3>Heading</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              nam?
            </p>
          </ToursItemFront>
          <ToursItemBack>back</ToursItemBack>
        </ToursItem>
        <ToursItem>
          <ToursItemFront>front</ToursItemFront>
          <ToursItemBackSecond>back</ToursItemBackSecond>
        </ToursItem>
        <ToursItem>
          <ToursItemFront>front</ToursItemFront>
          <ToursItemBackThird>back</ToursItemBackThird>
        </ToursItem>
      </ToursMenu>
    </ToursContainer>
  );
}

export default Tours;
