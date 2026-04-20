import { useEffect, useRef } from "react";

function useRevealOnScroll() {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return elementRef;
}

export default useRevealOnScroll;
