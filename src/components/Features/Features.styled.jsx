import styled from "styled-components";
import featuresImg from "@/assets/features.jpg";
import featuresImgDesktop from "@/assets/features@2x.jpg";
import featuresImgWebp from "@/assets/features.webp";
import featuresImgDesktopWebp from "@/assets/features@2x.webp";

export const FeaturesContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 9.6rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      to left bottom,
      ${(p) => p.theme.colors.heroOverlayColor},
      ${(p) => p.theme.colors.heroSecondOverlayColor}
    ),
    url(${featuresImg});
  background-size: cover;
  background-position: center;
  -webkit-clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);

  @supports (background-image: url(${featuresImgWebp})) {
    background-image: linear-gradient(
        to left bottom,
        ${(p) => p.theme.colors.heroOverlayColor},
        ${(p) => p.theme.colors.heroSecondOverlayColor}
      ),
      url(${featuresImgWebp});
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to left bottom,
        ${(p) => p.theme.colors.heroOverlayColor},
        ${(p) => p.theme.colors.heroSecondOverlayColor}
      ),
      url(${featuresImgDesktop});
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    @supports (background-image: url(${featuresImgDesktopWebp})) {
      background-image: linear-gradient(
          to left bottom,
          ${(p) => p.theme.colors.heroOverlayColor},
          ${(p) => p.theme.colors.heroSecondOverlayColor}
        ),
        url(${featuresImgDesktopWebp});
    }
  }
`;

export const FeaturesMenu = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2.4rem;
  padding: 0 9.6rem;
`;

export const FeaturesMenuItems = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  gap: 2.4rem;
  padding: 2.4rem;
  border-radius: 1.2rem;
  background-color: ${(p) => p.theme.colors.whiteColorLowOp};
  position: relative;
  padding-top: 4.8rem;
  border-top: 1px solid ${(p) => p.theme.colors.accentColor};
`;

export const FeaturesIconWrapper = styled.div`
  border-radius: 50rem;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  overflow: hidden;
  padding: 0.8rem;
  margin-bottom: 1.2rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid ${(p) => p.theme.colors.accentColor};
`;

export const FeaturesIcon = styled.svg`
  width: 5.2rem;
  height: 5.2rem;
`;
