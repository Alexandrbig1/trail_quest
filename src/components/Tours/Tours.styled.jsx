import styled from "styled-components";
import { primaryFont, secondaryFont } from "../fonts";
import oceanImg from "@/assets/tours_ocean.jpg";
import oceanImgWebp from "@/assets/tours_ocean.webp";
import oceanImgDesktop from "@/assets/tours_ocean@2x.jpg";
import oceanImgDesktopWebp from "@/assets/tours_ocean@2x.webp";
import mountainImg from "@/assets/tours_mountain.jpg";
import mountainImgWebp from "@/assets/tours_mountain.webp";
import mountainImgDesktop from "@/assets/tours_mountain@2x.jpg";
import mountainImgDesktopWebp from "@/assets/tours_mountain@2x.webp";
import snowImg from "@/assets/tours_snow.jpg";
import snowImgWebp from "@/assets/tours_snow.webp";
import snowImgDesktop from "@/assets/tours_snow@2x.jpg";
import snowImgDesktopWebp from "@/assets/tours_snow@2x.webp";

export const ToursContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9.2rem;
`;

export const ToursMenu = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 9.6rem;
  padding: 0 9.6rem;
`;

export const ToursItemWrapper = styled.div`
  height: 52rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  border-radius: 1.2rem;
  transition: all 1s ease;
  box-shadow: 0 1.5rem 4rem ${({ theme }) => theme.colors.featuresCardBoxShadow};
`;

export const ToursItemFront = styled(ToursItemWrapper)`
  background-color: ${({ theme }) => theme.colors.whiteColor};
`;

export const ToursItemBack = styled(ToursItemWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;

  transform: rotateY(180deg);
  background-image: linear-gradient(
    to right bottom,
    ${({ theme }) => theme.colors.blueColor},
    ${({ theme }) => theme.colors.blueColorDark}
  );
`;

export const ToursItemBackSecond = styled(ToursItemWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;

  transform: rotateY(180deg);
  background-image: linear-gradient(
    to right bottom,
    ${({ theme }) => theme.colors.orangeColor},
    ${({ theme }) => theme.colors.orangeColorDark}
  );
`;

export const ToursItemBackThird = styled(ToursItemWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;

  transform: rotateY(180deg);
  background-image: linear-gradient(
    to right bottom,
    ${({ theme }) => theme.colors.greenColor},
    ${({ theme }) => theme.colors.greenColorDark}
  );
`;

export const ToursItem = styled.li`
  height: 52rem;
  width: 100%;
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  border-radius: 1.2rem;

  &:hover {
    ${ToursItemFront} {
      transform: rotateY(-180deg);
    }
  }

  &:hover {
    ${ToursItemBack} {
      transform: rotateY(0);
    }
  }
  &:hover {
    ${ToursItemBackSecond} {
      transform: rotateY(0);
    }
  }
  &:hover {
    ${ToursItemBackThird} {
      transform: rotateY(0);
    }
  }
`;

export const ToursItemImg = styled.div`
  background-size: cover;
  border-top-right-radius: 1.2rem;
  border-top-left-radius: 1.2rem;
  height: 23rem;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
`;

export const ToursItemImgFirst = styled(ToursItemImg)`
  background-image: linear-gradient(
      to right bottom,
      ${(p) => p.theme.colors.blueColorLowOp},
      ${(p) => p.theme.colors.blueColorDarkLowOp}
    ),
    url(${oceanImg});

  @supports (background-image: url(${oceanImgWebp})) {
    background-image: linear-gradient(
        to right bottom,
        ${(p) => p.theme.colors.blueColorLowOp},
        ${(p) => p.theme.colors.blueColorDarkLowOp}
      ),
      url(${oceanImgWebp});
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to right bottom,
        ${(p) => p.theme.colors.blueColorLowOp},
        ${(p) => p.theme.colors.blueColorDarkLowOp}
      ),
      url(${oceanImgDesktop});
  }

  @supports (background-image: url(${oceanImgDesktopWebp})) {
    background-image: linear-gradient(
        to right bottom,
        ${(p) => p.theme.colors.blueColorLowOp},
        ${(p) => p.theme.colors.blueColorDarkLowOp}
      ),
      url(${oceanImgDesktopWebp});
  }
`;

export const ToursItemImgSecond = styled(ToursItemImg)`
  background-image: linear-gradient(
      to right bottom,
      ${(p) => p.theme.colors.orangeColorLowOp},
      ${(p) => p.theme.colors.orangeColorDarkLowOp}
    ),
    url(${mountainImg});

  @supports (background-image: url(${mountainImgWebp})) {
    background-image: linear-gradient(
        to right bottom,
        ${(p) => p.theme.colors.orangeColorLowOp},
        ${(p) => p.theme.colors.orangeColorDarkLowOp}
      ),
      url(${mountainImgWebp});
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to right bottom,
        ${(p) => p.theme.colors.orangeColorLowOp},
        ${(p) => p.theme.colors.orangeColorDarkLowOp}
      ),
      url(${mountainImgDesktop});
  }

  @supports (background-image: url(${mountainImgDesktopWebp})) {
    background-image: linear-gradient(
        to right bottom,
        ${(p) => p.theme.colors.orangeColorLowOp},
        ${(p) => p.theme.colors.orangeColorDarkLowOp}
      ),
      url(${mountainImgDesktopWebp});
  }
`;

export const ToursItemImgThird = styled(ToursItemImg)`
  background-image: linear-gradient(
      to right bottom,
      ${(p) => p.theme.colors.greenColorDarkLowOp},
      ${(p) => p.theme.colors.greenColorDarkLowOp}
    ),
    url(${snowImg});

  @supports (background-image: url(${snowImgWebp})) {
    background-image: linear-gradient(
        to right bottom,
        ${(p) => p.theme.colors.greenColorDarkLowOp},
        ${(p) => p.theme.colors.greenColorDarkLowOp}
      ),
      url(${snowImgWebp});
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to right bottom,
        ${(p) => p.theme.colors.greenColorDarkLowOp},
        ${(p) => p.theme.colors.greenColorDarkLowOp}
      ),
      url(${snowImgDesktop});
  }

  @supports (background-image: url(${snowImgDesktopWebp})) {
    background-image: linear-gradient(
        to right bottom,
        ${(p) => p.theme.colors.greenColorDarkLowOp},
        ${(p) => p.theme.colors.greenColorDarkLowOp}
      ),
      url(${snowImgDesktopWebp});
  }
`;

export const ToursHeading = styled.h4`
  font-size: 2.8rem;
  text-align: uppercase;
  text-align: right;
  color: ${({ theme }) => theme.colors.whiteColor};
  font-family: ${primaryFont};
  line-height: 1.2;
  letter-spacing: -0.02em;
  width: 75%;
  position: absolute;
  top: 14.4rem;
  right: 2rem;
`;

export const ToursHeadingBack = styled.span`
  padding: 0 1.2rem;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
`;

export const ToursHeadingBackFirst = styled(ToursHeadingBack)`
  background-image: linear-gradient(
    to right bottom,
    ${(p) => p.theme.colors.blueColorLowOp},
    ${(p) => p.theme.colors.blueColorDarkLowOp}
  );
`;

export const ToursHeadingBackSecond = styled(ToursHeadingBack)`
  background-image: linear-gradient(
    to right bottom,
    ${(p) => p.theme.colors.orangeColorLowOp},
    ${(p) => p.theme.colors.orangeColorDarkLowOp}
  );
`;

export const ToursHeadingBackThird = styled(ToursHeadingBack)`
  background-image: linear-gradient(
    to right bottom,
    ${(p) => p.theme.colors.greenColorLowOp},
    ${(p) => p.theme.colors.greenColorDarkLowOp}
  );
`;

export const ToursCardMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  gap: 1.2rem;
  padding: 1.2rem;
`;

export const ToursCardMenuItem = styled.li`
  text-align: center;
  font-size: 1.6rem;
  font-family: ${secondaryFont};
  line-height: 1.2;
  letter-spacing: -0.02em;
  padding: 0.8rem 1.2rem;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyColor};
    padding-bottom: 1.2rem;
  }
`;

export const ToursItemBackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;
  padding: 2.4rem;
`;

export const ToursItemPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TourItemPrice = styled.span`
  font-size: 6.2rem;
  font-family: ${secondaryFont};
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.whiteColor};
`;

export const TourItemSubPrice = styled.span`
  font-size: 1.4rem;
  text-transform: uppercase;
  font-family: ${secondaryFont};
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.whiteColor};
`;

export const TourItemCardDescription = styled.p`
  font-family: ${secondaryFont};
  text-align: center;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.whiteColor};
`;

export const ToursItemCardBtn = styled.button`
  padding: 1.2rem 2.4rem;
  border-radius: 50rem;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  font-family: ${secondaryFont};
  font-size: 2rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.mainTextColor};
`;
