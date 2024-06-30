import styled from "styled-components";
// import heroBgMobile from "@/assets/hero_bg_mobile.jpg";
// import heroBgTablet from "@/assets/hero_bg_tablet.jpg";
// import heroBgDesktop from "@/assets/hero_bg_laptop.jpg";
// import heroBg2x from "@/assets/hero_bg@2x.jpg";

export const Container = styled.div`
  width: 100%;
  max-width: 375px;
  position: relative;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const Main = styled.main`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.mainTextColor};
  transition: background-image 0.3s ease-in-out;
  position: relative;

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1024px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1024px) and (min-resolution: 192dpi) {
  }
`;
