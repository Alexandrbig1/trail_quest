import styled from "styled-components";
import { secondaryFont } from "../fonts";
import { LuMousePointerClick } from "react-icons/lu";

export const AboutContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8rem;
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

export const AboutHighlightTitle = styled.div`
  text-transform: uppercase;
  font-family: ${secondaryFont};
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const AboutHighlightDescription = styled.div`
  font-family: ${secondaryFont};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.paragraphTextColor};
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
  /* position: absolute; */
  width: 55%;
  width: 100%;
  z-index: 10;
  transition: all var(--primary-transition);
  /* border: 1.2rem solid #fff; */

  &:hover {
    transform: scale(1.05);
    z-index: 20;
  }
`;

export const AboutImageFirst = styled(AboutImage)`
  /* top: -2rem;
  left: -4rem; */
`;

export const AboutImageSecond = styled(AboutImage)`
  /* top: 4rem;
  right: -4rem; */
`;

export const AboutImageThird = styled(AboutImage)`
  /* bottom: 0;
  left: 20%; */
`;

export const ImgFigureFirst = styled.figure`
  /* position: relative; */
  width: 55%;
  position: absolute;
  top: -2rem;
  left: -4rem;
`;

export const ImgFigureSecond = styled.figure`
  /* position: relative; */
  width: 55%;
  position: absolute;
  top: 4rem;
  right: -4rem;
`;

export const ImgFigureThird = styled.figure`
  /* position: relative; */
  width: 55%;
  position: absolute;
  bottom: 0;
  left: 20%;
`;

export const ImgDescription = styled.figcaption`
  position: absolute;
  bottom: -2.4rem;
  left: 0;
`;
