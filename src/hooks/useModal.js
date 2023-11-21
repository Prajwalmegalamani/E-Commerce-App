import { useState } from "react";
import useModalLock from "./useModalLock";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const { setModalOpen, setModalClose } = useModalLock();

  function toggle() {
    setIsShowing(!isShowing);
    if (!isShowing) {
      setModalOpen();
    } else {
      setModalClose();
    }
  }

  return {
    isShowing,
    toggle,
  };
};

export default useModal;
