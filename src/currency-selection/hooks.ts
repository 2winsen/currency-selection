import { useEffect, useRef } from "react";

export function useUnblockAnimations<T extends HTMLElement>() {
  const containerRef = useRef<T>(null);
  useEffect(() => {
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.classList.remove("animationBlock");
      }
    }, 200);
  }, []);
  return containerRef;
}
