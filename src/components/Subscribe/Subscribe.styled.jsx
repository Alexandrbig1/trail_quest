import styled from "styled-components";
import { primaryFont, secondaryFont } from "../fonts";
import roadImg from "@/assets/road.jpg";
import roadImgWebp from "@/assets/road.webp";

export const SubscribeContainer = styled.section`
  margin: 4.8rem auto;
  padding: 2.4rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.4rem;
`;

export const SubscribeWrapper = styled.div`
  max-width: 94rem;
  width: 100%;
  height: 100%;
  background-color: ${(p) => p.theme.colors.accentColor};
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  padding: 2.4rem;
  border-radius: 1.6rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
  }
`;

export const SubscribeTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  z-index: 5;

  @media (min-width: 720px) {
    gap: 4.2rem;
  }
`;

export const SubscribeTitle = styled.h3`
  font-family: ${primaryFont};
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const SubscribeText = styled.p`
  width: 100%;
  font-family: ${secondaryFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.secondaryTextColor};

  @media (min-width: 600px) {
    width: 75%;
    color: ${(p) => p.theme.colors.mainTextColor};
  }
  @media (min-width: 720px) {
    width: 100%;
    color: ${(p) => p.theme.colors.secondaryTextColor};
  }
`;

export const SubscribeInputWrapper = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 20;

  gap: 1.2rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const SubscribeInput = styled.input`
  width: 100%;
  background: none;
  outline: none;
  border: none;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  border-radius: 1rem;
  padding: 18px;
  height: 56px;
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: ${secondaryFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  transition: all var(--primary-transition);

  @media (min-width: 480px) {
    width: 100%;
    border-radius: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &::placeholder {
    font-family: ${secondaryFont};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${(p) => p.theme.colors.inputTextColor};
  }

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.whiteColor};
  }
`;

export const SubscribeButton = styled.button`
  align-self: flex-end;
  background: none;
  outline: none;
  border: none;
  background-color: ${(p) => p.theme.colors.blueColor};
  border-radius: 1rem;
  width: 100%;
  height: 56px;
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.whiteColor};
  transition: var(--primary-transition);

  @media (min-width: 326px) {
    width: 160px;
  }

  @media (min-width: 480px) {
    border-radius: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.accentDarkColor};
    cursor: pointer;
  }
`;

export const RoadImg = styled.div`
  position: absolute;
  bottom: -55%;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: url(${roadImg});
  background-size: cover;
  background-position: bottom 15rem center;
  background-repeat: no-repeat;

  @supports (background-image: url(${roadImgWebp})) {
    background-image: url(${roadImgWebp});
  }

  @media (min-width: 480px) {
    bottom: -60%;
    background-position: bottom 12rem center;
  }

  @media (min-width: 600px) {
    top: 0;
    left: 33%;
    background-position: bottom 20% center;
  }
`;
