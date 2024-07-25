import React from "react";
import {
  AboutImage,
  AboutImageWrapper,
  ImgDescriptionFirst,
  ImgDescriptionSecond,
  ImgDescriptionSecondAdd,
  ImgDescriptionThird,
  ImgFigureFirst,
  ImgFigureSecond,
  ImgFigureThird,
} from "./About.styled";

const AboutImgWrap = React.memo(() => {
  return (
    <AboutImageWrapper>
      <ImgFigureFirst>
        <picture>
          <source
            srcSet="images/about1_mobile.webp 640w"
            media="(max-width: 640px)"
            type="image/webp"
          />
          <source
            srcSet="images/about1_desktop.webp 1920w"
            media="(min-width: 641px) and (max-width: 1919px)"
            type="image/webp"
          />
          <source
            srcSet="images/about1_desktop@2x.webp 2400w"
            media="(min-width: 1920px)"
            type="image/webp"
          />
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
          <AboutImage
            src="images/about1_mobile.jpg"
            alt="Scenic view of Crater Lake in Oregon with clear blue water and surrounding cliffs"
            loading="lazy"
          />
        </picture>
        <ImgDescriptionFirst>
          Crater Lake{" "}
          <ImgDescriptionSecondAdd>
            (the deepest lake in the US)
          </ImgDescriptionSecondAdd>
        </ImgDescriptionFirst>
      </ImgFigureFirst>
      <ImgFigureSecond>
        <picture>
          <source
            srcSet="images/about2_mobile.webp 640w"
            media="(max-width: 640px)"
            type="image/webp"
          />
          <source
            srcSet="images/about2_desktop.webp 1920w"
            media="(min-width: 641px) and (max-width: 1919px)"
            type="image/webp"
          />
          <source
            srcSet="images/about2_desktop@2x.webp 2400w"
            media="(min-width: 1920px)"
            type="image/webp"
          />
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
          <AboutImage
            src="images/about2_mobile.jpg"
            alt="Scenic view of Columbia River Gorge with towering cliffs, lush greenery, and the Columbia River flowing through"
            loading="lazy"
          />
        </picture>
        <ImgDescriptionSecond>
          The stunning Columbia River Gorge
        </ImgDescriptionSecond>
      </ImgFigureSecond>
      <ImgFigureThird>
        <picture>
          <source
            srcSet="images/about3_mobile.webp 640w"
            media="(max-width: 640px)"
            type="image/webp"
          />
          <source
            srcSet="images/about3_desktop.webp 1920w"
            media="(min-width: 641px) and (max-width: 1919px)"
            type="image/webp"
          />
          <source
            srcSet="images/about3_desktop@2x.webp 2400w"
            media="(min-width: 1920px)"
            type="image/webp"
          />
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
          <AboutImage
            src="images/about3_mobile.jpg"
            alt="Scenic view of Multnomah Falls cascading down a lush green cliff in the Columbia River Gorge area of Oregon"
            loading="lazy"
          />
        </picture>
        <ImgDescriptionThird>The iconic Multnomah Falls</ImgDescriptionThird>
      </ImgFigureThird>
    </AboutImageWrapper>
  );
});

AboutImgWrap.displayName = "AboutImgWrap";

export default AboutImgWrap;
