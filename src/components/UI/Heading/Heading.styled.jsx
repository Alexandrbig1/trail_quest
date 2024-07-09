import styled from "styled-components";
import { primaryFont } from "../../fonts";

export const HeadingSectionTitle = styled.h2`
  font-family: ${primaryFont};
  text-align: center;
  text-transform: uppercase;
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 0.2rem;
  background-image: linear-gradient(
    to right,
    ${(p) => p.theme.colors.headingSecondaryTextColor},
    ${(p) => p.theme.colors.headingTextColor}
  );
  -webkit-background-clip: text;
  color: transparent;
`;

export const AboutHighlightTitle = styled.h3`
  text-transform: uppercase;
  font-family: ${primaryFont};
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainTextColor};
`;
