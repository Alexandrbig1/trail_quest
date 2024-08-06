import styled from "styled-components";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { primaryFont, secondaryFont } from "../../fonts";

export const ModalDiv = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  padding: 2.4rem;
  width: 75%;
  height: auto;
  background-color: ${(p) => p.theme.colors.whiteColor};
  overflow-y: scroll;
  scroll-behavior: smooth;
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.2rem;
`;

export const CloseModal = styled.button`
  border: none;
  outline: none;
  background: none;
  width: 2.4rem;
  height: 2.4rem;
  color: ${(p) => p.theme.colors.mainTextColor};
  top: 1.6rem;
  right: 1.6rem;
  position: absolute;
  cursor: pointer;
  z-index: 300;
  transition: transform var(--primary-transition),
    scale var(--primary-transition);

  &:hover,
  &:focus {
    transform: rotate(90deg) scale(1.2);
    color: ${(p) => p.theme.colors.accentDarkColor};
  }
`;

export const CloseIcon = styled(IoMdClose)`
  font-size: 2.4rem;
`;

export const ModalWindow = styled.div`
  display: grid;
  grid-template-columns: 1.75fr 1.25fr;
  gap: 6.4rem;
  border-radius: 1.2rem;
`;

export const ModalTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  position: relative;
`;

export const ModalTitle = styled.h3`
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-size: 2.4rem;
  font-family: ${primaryFont};
  line-height: 1.2;
  letter-spacing: -0.02em;
`;

export const ModalText = styled.p`
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-family: ${secondaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
`;

export const ModalPrice = styled.span`
  font-size: 3.6rem;
  font-family: ${secondaryFont};
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mainTextColor};
`;

export const ModalButton = styled.button`
  padding: 1.2rem 2.4rem;
  border-radius: 50rem;
  background-color: ${({ theme }) => theme.colors.accentDarkColor};
  font-family: ${secondaryFont};
  font-size: 2rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.whiteColor};
  width: 60%;
  transition: all var(--primary-transition);

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.blueColor};
  }
`;

export const ToursModalImg = styled.img`
  width: 100%;
  height: auto;
`;
