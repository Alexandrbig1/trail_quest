import styled from "styled-components";
import { primaryFont } from "../../fonts";

export const LogoWrapper = styled.a`
  display: flex;
  gap: 0.6rem;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 3.2rem;
  height: 3.2rem;
`;

export const LogoText = styled.p`
  color: ${(p) => p.theme.colors.headerTextColor};
  font-family: ${primaryFont};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: #fff;
`;
