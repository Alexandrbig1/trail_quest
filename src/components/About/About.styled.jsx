import styled from "styled-components";
import { secondaryFont } from "../fonts";
import { LuMousePointerClick } from "react-icons/lu";

import { HiOutlineArrowCircleRight } from "react-icons/hi";

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
