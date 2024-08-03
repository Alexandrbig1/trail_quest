import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useMenu } from "@/context/ToggleMenuContext";
import toursData from "@/data/toursData.json";
import ModalImgComponent from "./ModalImgComponent";
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

const ToursModal = React.memo(({ selectedTour }) => {
  const { modalIsOpen, toggleToursModal } = useMenu();

  const filteredTour = useMemo(() => {
    return toursData.find((item) => item.modalId === selectedTour);
  }, [selectedTour]);

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
      {filteredTour && (
        <ModalWindow>
          <h2>{filteredTour.title}</h2>
          <span>{filteredTour.price}</span>
          <p>{filteredTour.description}</p>
          <ModalImgComponent
            img={filteredTour.img}
            altText={`Image for tour ${filteredTour.modalId}`}
          />
        </ModalWindow>
      )}
    </ModalDiv>
  );
});

ToursModal.propTypes = {
  selectedTour: PropTypes.string.isRequired,
};

ToursModal.displayName = "ToursModal";

export default ToursModal;
