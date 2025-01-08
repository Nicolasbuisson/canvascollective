"use client";
import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("reset", handleResize);
    // call initally to correctly set state since window is undefined until the component mounts
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("reset", handleResize);
    };
  }, []);

  return windowWidth;
};
