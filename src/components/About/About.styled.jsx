import styled from "styled-components";
import { secondaryFont } from "../fonts";
import { LuMousePointerClick } from "react-icons/lu";

export const AboutContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9.2rem;
`;

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 9.6rem;
  padding: 0 9.6rem;
`;

export const AboutHighlightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const AboutTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const AboutHighlightBtnText = styled.span`
  color: ${(p) => p.theme.colors.accentDarkColor};
  font-family: ${secondaryFont};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
  padding-bottom: 3px;
  border-bottom: 1px solid transparent;
  transition: all var(--primary-transition);
`;

export const AboutHighlightBtnIcon = styled(LuMousePointerClick)`
  font-size: 2rem;
  color: ${(p) => p.theme.colors.accentDarkColor};
  transition: color var(--primary-transition),
    transform var(--primary-transition);
`;

export const AboutHighlightBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  align-self: self-start;
  display: flex;
  align-items: end;
  gap: 0.4rem;

  &:hover {
    ${AboutHighlightBtnText} {
      border-bottom: 1px solid ${(p) => p.theme.colors.accentDarkColor};
    }

    ${AboutHighlightBtnIcon} {
      transform: scale(1.15);
    }
  }
`;

export const AboutImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const AboutImage = styled.img`
  width: 55%;
  width: 100%;
  z-index: 10;
  border-radius: 0.4rem;
  transition: all var(--primary-transition);

  &:hover {
    transform: scale(1.05);
    z-index: 20;
  }
`;

export const ImgFigureFirst = styled.figure`
  width: 55%;
  position: absolute;
  top: -2rem;
  left: -4rem;
`;

export const ImgFigureSecond = styled.figure`
  width: 55%;
  position: absolute;
  top: 4rem;
  right: -4rem;
`;

export const ImgFigureThird = styled.figure`
  width: 55%;
  position: absolute;
  bottom: 0;
  left: 20%;
`;

export const ImgDescriptionFirst = styled.figcaption`
  position: absolute;
  bottom: -2.8rem;
  left: 0;

  font-family: ${secondaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.paragraphTextColor};
`;

export const ImgDescriptionSecond = styled.figcaption`
  position: absolute;
  top: -2.8rem;
  right: 0;

  font-family: ${secondaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.paragraphTextColor};
`;

export const ImgDescriptionSecondAdd = styled.span`
  font-family: ${secondaryFont};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.paragraphTextColor};
`;

export const ImgDescriptionThird = styled.figcaption`
  position: absolute;
  bottom: -2.8rem;
  right: 0;

  font-family: ${secondaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.paragraphTextColor};
`;
