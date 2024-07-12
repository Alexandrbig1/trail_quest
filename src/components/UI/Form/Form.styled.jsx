import styled from "styled-components";
import { primaryFont, secondaryFont } from "../../fonts";

export const FormWrapper = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  padding: 2.4rem;
  border-radius: 0.8rem;
`;

export const FormInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 1.4rem 2.2rem;
  border-radius: 0.8rem;
  background-color: ${(p) => p.theme.colors.inputColor};
  font-family: ${secondaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.mainTextColor};
  transition: all 0.2s ease-in-out;
  border-bottom: 3px solid transparent;

  &::placeholder {
    font-family: ${secondaryFont};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.paragraphTextColor};
  }

  &:focus {
    outline: none;
    box-shadow: 1px 0 8px ${({ theme }) => theme.colors.mainTextColorVeryLowOp},
      -1px 0 8px ${({ theme }) => theme.colors.mainTextColorVeryLowOp};
    box-shadow: 0 1rem 2rem
      ${({ theme }) => theme.colors.mainTextColorVeryLowOp};
    border-bottom: 3px solid ${({ theme }) => theme.colors.accentColor};
    background-color: ${(p) => p.theme.colors.inputColor};
  }
`;

export const FormBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  width: 100%;
  padding: 1.2rem 2.4rem;
  background-color: ${(p) => p.theme.colors.accentColor};
  border-radius: 1.2rem;
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
  transition: all var(--primary-transition);
  color: ${(p) => p.theme.colors.blackColor};

  &:hover {
    background-color: ${(p) => p.theme.colors.accentDarkColor};
    color: ${(p) => p.theme.colors.whiteColor};
  }
`;
