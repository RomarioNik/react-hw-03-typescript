import { useEffect } from "react";
import { createPortal } from "react-dom";
// styled
import { BackDrop, ModalStyled, Button, IconClose } from "./Modal.styled";
// types
import { IModalProps } from "./Modal.types";

const modelRoot = document.querySelector("#root-modal") as HTMLElement;

export const Modal: React.FC<IModalProps> = ({ closeModal, children }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  const handleBackDropClick = (e: React.FormEvent) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <BackDrop onClick={handleBackDropClick}>
      <ModalStyled>
        <Button type="button" onClick={closeModal} aria-label="Button close">
          <IconClose />
        </Button>
        {children}
      </ModalStyled>
    </BackDrop>,
    modelRoot
  );
};
