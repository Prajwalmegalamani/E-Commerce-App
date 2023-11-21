import React from "react";

export default function useScrollLock() {
  const lockScroll = React.useCallback(() => {
    document.body.classList.add("lock-scroll");
  }, []);

  const unlockScroll = React.useCallback(() => {
    document.body.classList.remove("lock-scroll");
  }, []);

  return {
    lockScroll,
    unlockScroll,
  };
}
