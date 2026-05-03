import { useRef, useCallback } from "react";

const useFocus = () => {
  const ref = useRef(null);

  const focus = useCallback(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return { ref, focus };
};

export default useFocus;
