import styled from "styled-components";
import featuresImg from "@/assets/features.jpg";
import featuresImgDesktop from "@/assets/features@2x.jpg";
import { MdOutlineModeOfTravel } from "react-icons/md";

export const FeaturesContainer = styled.div`
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
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);

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
`;

export const FeaturesIconWrapper = styled.div`
  border-radius: 50rem;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  padding: 1rem;
  margin-bottom: 1.2rem;
`;

export const FeaturesIcon = styled(MdOutlineModeOfTravel)`
  font-size: 3.6rem;
  color: ${(p) => p.theme.colors.accentDarkColor};
`;
