import React from "react";
import { useMenu } from "@/context/ToggleMenuContext";
import toursData from "@/data/toursData.json";
import {
  CloseIcon,
  CloseModal,
  ModalDiv,
  ModalWindow,
} from "./ToursModal.styled";
import { ToursHeading } from "../../Tours/Tours.styled";

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

const ToursModal = React.memo((modalId, selectedTour) => {
  const { modalIsOpen, toggleToursModal } = useMenu();

  if (!selectedTour) return null;

  const { img, imgWebp, imgDesktop, imgDesktopWebp } = selectedTour;

  // console.log(selectedTour);

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
      <ModalWindow>
        <picture>
          <source srcSet={img} type="image/jpg" />
          <source
            srcSet={imgDesktop}
            media="(min-width: 1024px)"
            type="image/webp"
          />
          <source srcSet={imgWebp} type="image/webp" />
          <source
            srcSet={imgDesktopWebp}
            media="(min-width: 1024px)"
            type="image/webp"
          />
          <img src={img} alt={`Image for tour ${modalId}`} />
        </picture>
      </ModalWindow>
    </ModalDiv>
  );
});

ToursModal.displayName = "ToursModal";

export default ToursModal;
