import styled from "styled-components";
import { primaryFont } from "../fonts";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1440px;
  padding: 1.2rem 2.4rem;
  background-color: ${(p) => p.theme.colors.footerColor};

  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`;

export const FooterAuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${(p) => p.theme.colors.greyColor};
  padding-top: 1.6rem;
`;

export const FooterInfoText = styled.p`
  color: ${(p) => p.theme.colors.whiteColorLowOp};
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.28571;
  letter-spacing: -0.02em;

  order: 2;

  @media (min-width: 540px) {
    order: 1;
  }
`;

export const FooterLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: ${(p) => p.theme.colors.whiteColorLowOp};

  order: 1;

  @media (min-width: 540px) {
    order: 2;
  }
`;

export const FooterInfoLink = styled(Link)`
  color: ${(p) => p.theme.colors.whiteColorLowOp};
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  transition: all var(--primary-transition);

  &:hover {
    color: ${(p) => p.theme.colors.whiteColor};
  }
`;
