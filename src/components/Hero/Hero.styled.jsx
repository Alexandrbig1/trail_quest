import styled from "styled-components";
import heroImg from "@/assets/hero.jpg";
import heroImgDesktop from "@/assets/hero@2x.jpg";

export const HeroWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
  background-image: linear-gradient(
      to right bottom,
      rgb(126, 213, 111, 0.8),
      rgb(40, 180, 133, 0.8)
    ),
    url(../img/hero.jpg);
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;
`;

export const HeroTitle = styled.h1`
  color: #fff;
  text-transform: uppercase;

  backface-visibility: hidden;
  margin-bottom: 60px;
`;

export const HeroButton = styled.button`
  position: relative;
  background: none;
  outline: none;
  border: none;
  background-color: #fff;
  color: #777;
  padding: 1.4rem 3.6rem;
  border-radius: 50rem;
  transition: all var(--primary-transition);

  &:hover,
  &:focus {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
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
  }

  &:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }
`;
