import styled from "styled-components";
import heroImg from "@/assets/hero.jpg";
import heroImgDesktop from "@/assets/hero@2x.jpg";
import { primaryFont } from "../fonts";

export const HeroWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
  background-image: linear-gradient(
      to left bottom,
      ${(p) => p.theme.colors.heroOverlayColor},
      ${(p) => p.theme.colors.heroSecondOverlayColor}
    ),
    url(${heroImg});
  background-size: cover;
  background-position: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 75%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to left bottom,
        ${(p) => p.theme.colors.heroOverlayColor},
        ${(p) => p.theme.colors.heroSecondOverlayColor}
      ),
      url(${heroImgDesktop});
  }
`;

export const HeroTItleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroTitle = styled.h1`
  backface-visibility: hidden;
  font-family: ${primaryFont};
  font-weight: 700;
  font-size: 8.2rem;
  line-height: 1;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
`;

export const HeroSubTitle = styled.p`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  max-width: 72rem;
`;

export const HeroButton = styled.button`
  position: relative;
  background: none;
  outline: none;
  border: none;
  font-family: ${primaryFont};
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  background-color: #fff;
  color: #777;
  padding: 1.4rem 3.6rem;
  border-radius: 50rem;
  transition: all var(--primary-transition);

  &:hover,
  &:focus {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background-color: ${(p) => p.theme.colors.accentColor};
    color: #fff;
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 50rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all var(--primary-transition);
    background-color: #fff;
    opacity: 1;
  }

  &:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }
`;
