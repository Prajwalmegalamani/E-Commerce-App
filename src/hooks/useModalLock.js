import React from "react";

export default function useModalLock() {
  const setModalOpen = React.useCallback(() => {
    document.body.classList.add("modal-open");
  }, []);

  const setModalClose = React.useCallback(() => {
    document.body.classList.remove("modal-open");
  }, []);

  return {
    setModalOpen,
    setModalClose,
  };
}
