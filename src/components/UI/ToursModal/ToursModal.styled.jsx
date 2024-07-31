import styled from "styled-components";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";

export const ModalDiv = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  padding: 4.8rem 2.4rem;
  width: 75%;
  height: auto;
  background-color: ${(p) => p.theme.colors.whiteColor};
  overflow-y: scroll;
  scroll-behavior: smooth;
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.6rem;
  border-radius: 1.2rem;
`;

export const CloseModal = styled.button`
  border: none;
  outline: none;
  background: none;
  width: 2.4rem;
  height: 2.4rem;
  color: ${(p) => p.theme.colors.accentLightColor};
  top: 1.6rem;
  right: 1.6rem;
  position: absolute;
  cursor: pointer;
  transition: transform var(--primary-transition),
    scale var(--primary-transition);

  &:hover,
  &:focus {
    transform: rotate(90deg) scale(1.2);
    color: ${(p) => p.theme.colors.btnHoverColor};
  }
`;

export const CloseIcon = styled(IoMdClose)`
  font-size: 2.4rem;
`;

export const ModalWindow = styled.div`
  background-color: #777;
  border-radius: 1.2rem;
`;
