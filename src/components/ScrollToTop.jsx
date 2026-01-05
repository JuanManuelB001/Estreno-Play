// En tu archivo ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Intento inmediato
    window.scrollTo({
        top: 0,
        behavior: "instant", 
      });

    // Refuerzo para Android (ejecuta después de que el DOM se asiente)
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant", 
      });
    }, 10);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}