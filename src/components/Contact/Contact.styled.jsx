import styled from "styled-components";
import contactImg from "@/assets/contact.jpg";
import contactImgDesktop from "@/assets/contact@2x.jpg";

export const ContactContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 9.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to left bottom,
    ${(p) => p.theme.colors.greenColor},
    ${(p) => p.theme.colors.greenColorDark}
  );
`;

export const ContactWrapper = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.9) 50%
    ),
    url(${contactImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1.2rem;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  height: 50rem;

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url(${contactImgDesktop});
  }
`;
