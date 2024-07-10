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
  ToursHeading,
  ToursHeadingBackFirst,
  ToursItemImgThird,
  ToursItemImgSecond,
  ToursHeadingBackSecond,
  ToursHeadingBackThird,
  ToursCardMenu,
  ToursCardMenuItem,
  ToursItemBackWrapper,
  ToursItemPriceWrapper,
  TourItemPrice,
  TourItemSubPrice,
  ToursItemCardBtn,
  TourItemCardDescription,
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
            <ToursHeading>
              <ToursHeadingBackFirst>
                Coastal Explorer Tour
              </ToursHeadingBackFirst>
            </ToursHeading>
            <ToursCardMenu>
              <ToursCardMenuItem>Coastal sightseeing</ToursCardMenuItem>
              <ToursCardMenuItem>Marine wildlife observation</ToursCardMenuItem>
              <ToursCardMenuItem>Beach exploration</ToursCardMenuItem>
              <ToursCardMenuItem>Boat excursion</ToursCardMenuItem>
              <ToursCardMenuItem>Difficulty: easy</ToursCardMenuItem>
            </ToursCardMenu>
          </ToursItemFront>
          <ToursItemBack>
            <ToursItemBackWrapper>
              <ToursItemPriceWrapper>
                <TourItemSubPrice>only</TourItemSubPrice>
                <TourItemPrice>249$</TourItemPrice>
              </ToursItemPriceWrapper>
              <TourItemCardDescription>
                Explore the beauty of Oregon's coastline with our Ocean Tours.
                Discover hidden gems and breathtaking views along the Pacific
                Ocean.
              </TourItemCardDescription>
              <ToursItemCardBtn type="button" aria-label="Book a tour now">
                Book now!
              </ToursItemCardBtn>
            </ToursItemBackWrapper>
          </ToursItemBack>
        </ToursItem>
        <ToursItem>
          <ToursItemFront>
            <ToursItemImgSecond />
            <ToursHeading>
              <ToursHeadingBackSecond>
                Crater Lake Exploration
              </ToursHeadingBackSecond>
            </ToursHeading>
            <ToursCardMenu>
              <ToursCardMenuItem>Scenic hiking trails</ToursCardMenuItem>
              <ToursCardMenuItem>Wildlife encounters</ToursCardMenuItem>
              <ToursCardMenuItem>Mountain photography</ToursCardMenuItem>
              <ToursCardMenuItem>Guided hikes</ToursCardMenuItem>
              <ToursCardMenuItem>Difficulty: moderate</ToursCardMenuItem>
            </ToursCardMenu>
          </ToursItemFront>
          <ToursItemBackSecond>
            <ToursItemBackWrapper>
              <ToursItemPriceWrapper>
                <TourItemSubPrice>only</TourItemSubPrice>
                <TourItemPrice>249$</TourItemPrice>
              </ToursItemPriceWrapper>
              <TourItemCardDescription>
                Embark on an adventure through Oregon's majestic mountains.
                Experience hiking trails, wildlife, and stunning landscapes with
                our Mountain Tours.
              </TourItemCardDescription>
              <ToursItemCardBtn type="button" aria-label="Book a tour now">
                Book now!
              </ToursItemCardBtn>
            </ToursItemBackWrapper>
          </ToursItemBackSecond>
        </ToursItem>
        <ToursItem>
          <ToursItemFront>
            <ToursItemImgThird />
            <ToursHeading>
              <ToursHeadingBackThird>
                Winter Wonderland Excursion
              </ToursHeadingBackThird>
            </ToursHeading>
            <ToursCardMenu>
              <ToursCardMenuItem>Skiing and snowboarding</ToursCardMenuItem>
              <ToursCardMenuItem>Snowshoeing</ToursCardMenuItem>
              <ToursCardMenuItem>Snowmobile tours</ToursCardMenuItem>
              <ToursCardMenuItem>Winter photography</ToursCardMenuItem>
              <ToursCardMenuItem>Difficulty: challenging</ToursCardMenuItem>
            </ToursCardMenu>
          </ToursItemFront>
          <ToursItemBackThird>
            <ToursItemBackWrapper>
              <ToursItemPriceWrapper>
                <TourItemSubPrice>only</TourItemSubPrice>
                <TourItemPrice>249$</TourItemPrice>
              </ToursItemPriceWrapper>
              <TourItemCardDescription>
                Enjoy thrilling snow activities in Oregon's winter wonderland.
                From skiing to snowboarding, our Snow Adventures offer fun for
                everyone.
              </TourItemCardDescription>
              <ToursItemCardBtn type="button" aria-label="Book a tour now">
                Book now!
              </ToursItemCardBtn>
            </ToursItemBackWrapper>
          </ToursItemBackThird>
        </ToursItem>
      </ToursMenu>
    </ToursContainer>
  );
}

export default Tours;
