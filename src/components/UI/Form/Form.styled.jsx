import styled from "styled-components";
import { primaryFont, secondaryFont } from "../../fonts";

export const FormWrapper = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  padding: 2.4rem;
  border-radius: 0.8rem;
`;

export const FormInputWrapper = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  width: 100%;
  position: relative;
`;

export const FormInputLabel = styled.label`
  width: 100%;
  position: relative;

  display: flex;
  align-items: center;
`;

export const FormLabelIcon = styled.span`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.mainTextColorLowOp};

  position: absolute;
  top: 50%;
  left: 1.2rem;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
`;

export const FormInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 1.4rem 2.2rem 1.4rem 4.2rem;
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
    color: ${({ theme }) => theme.colors.mainTextColorLowOp};
  }

  &:focus {
    box-shadow: 0 1rem 2rem
      ${({ theme }) => theme.colors.mainTextColorVeryLowOp};
    border-bottom: ${(p) =>
      p.$error
        ? `3px solid ${p.theme.colors.errorLightColor}`
        : `3px solid ${p.theme.colors.accentColor}`};
  }

  &:hover {
    box-shadow: 0 1rem 1rem
      ${({ theme }) => theme.colors.mainTextColorVeryLowOp};
  }
`;

export const FormBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  width: 75%;
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

export const FormLegend = styled.legend`
  opacity: 0;
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const FormRadioButtonsWrapper = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;

  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const FormHiddenRadio = styled.input`
  display: none;
`;

export const FormRadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  margin: 0.5rem 0;
`;

export const FormCustomRadio = styled.span`
  width: 2rem;
  height: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.blueColor};
  border-radius: 50rem;
  position: relative;

  &:after {
    content: "";
    width: 1rem;
    height: 1rem;
    background: ${({ theme }) => theme.colors.blueColor};
    border-radius: 50rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity var(--primary-transition);
  }

  ${FormHiddenRadio}:checked + & {
    &:after {
      opacity: 1;
    }
  }
`;
