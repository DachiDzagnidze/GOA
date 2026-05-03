import { useEffect, useRef } from "react";

const useEventListener = (eventName, handler, element = window) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement = element?.current || element;

    if (!targetElement?.addEventListener) return;

    const eventListener = (event) => savedHandler.current(event);

    targetElement.addEventListener(eventName, eventListener);

    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

export default useEventListener;
