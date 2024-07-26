import styled from "styled-components";
import { primaryFont } from "../fonts";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2.4rem;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 6.4rem;
  z-index: 50;
  max-width: 1440px;
`;

export const HeaderNavMenu = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
`;

export const HeaderNavLink = styled.a`
  font-family: ${primaryFont};
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.5;
  color: ${(p) =>
    p?.$active
      ? p.theme.colors.mainTextColor
      : p.theme.colors.mainTextColorLowOp};
  text-transform: uppercase;
  text-decoration: none;
  transition: color var(--primary-transition);

  &:hover {
    color: ${(p) => p.theme.colors.mainTextColor};
  }
`;

export const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;
