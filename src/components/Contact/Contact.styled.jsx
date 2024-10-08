import styled from "styled-components";
import contactImg from "@/assets/contact.jpg";
import contactImgDesktop from "@/assets/contact@2x.jpg";
import contactImgWebp from "@/assets/contact.webp";
import contactImgDesktopWebp from "@/assets/contact@2x.webp";

export const ContactContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 9.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to right bottom,
    ${(p) => p.theme.colors.blueColorLowOp},
    ${(p) => p.theme.colors.greenColorDarkLowOp}
  );
`;

export const ContactWrapper = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  background-image: linear-gradient(
      105deg,
      ${(p) => p.theme.colors.whiteColorVeryLowOp} 0%,
      ${(p) => p.theme.colors.whiteColorVeryLowOp} 50%,
      transparent 50%
    ),
    url(${contactImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1.2rem;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  height: 50rem;

  @supports (background-image: url(${contactImgWebp})) {
    background-image: linear-gradient(
        105deg,
        ${(p) => p.theme.colors.whiteColorVeryLowOp} 0%,
        ${(p) => p.theme.colors.whiteColorVeryLowOp} 50%,
        transparent 50%
      ),
      url(${contactImgWebp});
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: linear-gradient(
        105deg,
        ${(p) => p.theme.colors.whiteColorVeryLowOp} 0%,
        ${(p) => p.theme.colors.whiteColorVeryLowOp} 50%,
        transparent 50%
      ),
      url(${contactImgDesktop});
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    @supports (background-image: url(${contactImgDesktopWebp})) {
      background-image: linear-gradient(
          105deg,
          ${(p) => p.theme.colors.whiteColorVeryLowOp} 0%,
          ${(p) => p.theme.colors.whiteColorVeryLowOp} 50%,
          transparent 50%
        ),
        url(${contactImgDesktopWebp});
    }
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const FormWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  justify-content: center;
`;
