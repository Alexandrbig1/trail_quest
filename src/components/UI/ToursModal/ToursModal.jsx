import React from "react";
import { useMenu } from "@/context/ToggleMenuContext";
import {
  CloseIcon,
  CloseModal,
  ModalDiv,
  ModalWindow,
} from "./ToursModal.styled";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: 100,
  },
};

const ToursModal = React.memo(() => {
  const { modalIsOpen, toggleToursModal } = useMenu();

  return (
    <ModalDiv
      isOpen={modalIsOpen}
      onRequestClose={toggleToursModal}
      style={customStyles}
      contentLabel="Contact Modal Window"
    >
      <CloseModal
        type="button"
        onClick={toggleToursModal}
        aria-label="Close modal"
      >
        <CloseIcon />
      </CloseModal>
      <ModalWindow>modal open</ModalWindow>
    </ModalDiv>
  );
});

ToursModal.displayName = "ToursModal";

export default ToursModal;
