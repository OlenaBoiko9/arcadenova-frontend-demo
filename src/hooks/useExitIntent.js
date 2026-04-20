import { useEffect, useState } from "react";

function useExitIntent(enabled = true) {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    if (!enabled) return undefined;

    const handleMouseLeave = (event) => {
      if (event.clientY <= 8) {
        setShouldShow(true);
      }
    };

    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [enabled]);

  return [shouldShow, setShouldShow];
}

export default useExitIntent;
