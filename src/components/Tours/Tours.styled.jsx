import styled from "styled-components";
import oceanImg from "@/assets/tours_ocean.jpg";
import oceanImgDesktop from "@/assets/tours_ocean@2x.jpg";
import mountainImg from "@/assets/tours_mountain.jpg";
import mountainImgDesktop from "@/assets/tours_mountain@2x.jpg";
import snowImg from "@/assets/tours_snow.jpg";
import snowImgDesktop from "@/assets/tours_snow@2x.jpg";

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
  background-color: ${({ theme }) => theme.colors.whiteColor};
  height: 50rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  border-radius: 1.2rem;
  transition: all 1s ease;
  box-shadow: 0 1.5rem 4rem ${({ theme }) => theme.colors.featuresCardBoxShadow};
  overflow: hidden;
`;

export const ToursItemFront = styled(ToursItemWrapper)`
  background-color: ${({ theme }) => theme.colors.whiteColor};
`;

export const ToursItemBack = styled(ToursItemWrapper)`
  transform: rotateY(180deg);
  background-image: linear-gradient(
    to right bottom,
    ${({ theme }) => theme.colors.blueColor},
    ${({ theme }) => theme.colors.blueColorDark}
  );
`;

export const ToursItemBackSecond = styled(ToursItemWrapper)`
  transform: rotateY(180deg);
  background-image: linear-gradient(
    to right bottom,
    ${({ theme }) => theme.colors.orangeColor},
    ${({ theme }) => theme.colors.orangeColorDark}
  );
`;

export const ToursItemBackThird = styled(ToursItemWrapper)`
  transform: rotateY(180deg);
  background-image: linear-gradient(
    to right bottom,
    ${({ theme }) => theme.colors.greenColor},
    ${({ theme }) => theme.colors.greenColorDark}
  );
`;

export const ToursItem = styled.li`
  height: 50rem;
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
  height: 23rem;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
`;

export const ToursItemImgFirst = styled(ToursItemImg)`
  background-image: linear-gradient(
      to right bottom,
      ${(p) => p.theme.colors.blueColor},
      ${(p) => p.theme.colors.blueColorDark}
    ),
    url(${oceanImg});

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to right bottom,
        ${(p) => p.theme.colors.blueColor},
        ${(p) => p.theme.colors.blueColorDark}
      ),
      url(${oceanImgDesktop});
  }
`;
export const ToursItemImgSecond = styled(ToursItemImg)`
  background-image: linear-gradient(
      to right bottom,
      ${(p) => p.theme.colors.orangeColor},
      ${(p) => p.theme.colors.orangeColorDark}
    ),
    url(${mountainImg});

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to right bottom,
        ${(p) => p.theme.colors.orangeColor},
        ${(p) => p.theme.colors.orangeColorDark}
      ),
      url(${mountainImgDesktop});
  }
`;

export const ToursItemImgThird = styled(ToursItemImg)`
  background-image: linear-gradient(
      to right bottom,
      ${(p) => p.theme.colors.greenColorDark},
      ${(p) => p.theme.colors.greenColorDark}
    ),
    url(${snowImg});

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to right bottom,
        ${(p) => p.theme.colors.greenColorDark},
        ${(p) => p.theme.colors.greenColorDark}
      ),
      url(${snowImgDesktop});
  }
`;
