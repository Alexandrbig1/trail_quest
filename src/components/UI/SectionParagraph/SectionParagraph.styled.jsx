import styled from "styled-components";
import { secondaryFont } from "../../fonts";

export const SectionParagraphText = styled.p`
  font-family: ${secondaryFont};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.paragraphTextColor};
`;
