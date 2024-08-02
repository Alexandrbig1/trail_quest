import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/context/activeSection";
import React, { useEffect, useState } from "react";
import HeadingSection from "../UI/Heading/Heading";
import toursData from "@/data/toursData.json";
import { useMenu } from "../../context/ToggleMenuContext";
import ToursModal from "../UI/ToursModal/ToursModal";
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

const BACK_COMPONENTS = {
  coastalImg: ToursItemBack,
  craterLakeImg: ToursItemBackSecond,
  winterImg: ToursItemBackThird,
};

const Tours = React.memo(() => {
  const { toggleToursModal } = useMenu();
  const { setActiveSection } = useActiveSection();
  const [selectedTour, setSelectedTour] = useState("");

  const { ref: toursRef, inView: toursInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (toursInView) {
      setActiveSection("Tours");
    }
  }, [toursInView, setActiveSection]);

  const handleBookNowClick = (tour) => {
    setSelectedTour(tour);
    toggleToursModal();
  };

  return (
    <ToursContainer id="tours" ref={toursRef}>
      <HeadingSection>Most popular tours</HeadingSection>
      <ToursMenu>
        {toursData.map(
          ({
            id,
            modalId,
            title,
            menuItems,
            price,
            description,
            coastalImg,
            craterLakeImg,
            winterImg,
          }) => {
            const BackComponent = coastalImg
              ? BACK_COMPONENTS.coastalImg
              : craterLakeImg
              ? BACK_COMPONENTS.craterLakeImg
              : winterImg
              ? BACK_COMPONENTS.winterImg
              : null;

            const FrontImage = coastalImg ? (
              <ToursItemImgFirst />
            ) : craterLakeImg ? (
              <ToursItemImgSecond />
            ) : winterImg ? (
              <ToursItemImgThird />
            ) : null;
            const Heading = coastalImg ? (
              <ToursHeadingBackFirst>{title}</ToursHeadingBackFirst>
            ) : craterLakeImg ? (
              <ToursHeadingBackSecond>{title}</ToursHeadingBackSecond>
            ) : winterImg ? (
              <ToursHeadingBackThird>{title}</ToursHeadingBackThird>
            ) : null;

            return (
              <ToursItem key={id}>
                <ToursItemFront>
                  {FrontImage}
                  <ToursHeading>{Heading}</ToursHeading>
                  <ToursCardMenu>
                    {menuItems.map((item) => (
                      <ToursCardMenuItem key={item}>{item}</ToursCardMenuItem>
                    ))}
                  </ToursCardMenu>
                </ToursItemFront>
                {BackComponent && (
                  <BackComponent>
                    <ToursItemBackWrapper>
                      <ToursItemPriceWrapper>
                        <TourItemSubPrice>only</TourItemSubPrice>
                        <TourItemPrice>{price}</TourItemPrice>
                      </ToursItemPriceWrapper>
                      <TourItemCardDescription>
                        {description}
                      </TourItemCardDescription>
                      <ToursItemCardBtn
                        type="button"
                        aria-label="Book a tour now"
                        onClick={() => handleBookNowClick(modalId)}
                      >
                        Book now!
                      </ToursItemCardBtn>
                    </ToursItemBackWrapper>
                  </BackComponent>
                )}
              </ToursItem>
            );
          }
        )}
      </ToursMenu>
      <ToursModal selectedTour={selectedTour} />
    </ToursContainer>
  );
});

Tours.displayName = "Tours";

export default Tours;
