import { useCallback, useEffect, useState } from "react";

const DARK = "dark";
const LIGHT = "light";

const useDarkMode = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === DARK ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add(DARK);
      setIsEnabled(true);

      return;
    }

    document.documentElement.classList.remove(DARK);
  }, []);

  const toggle = useCallback(() => {
    if (isEnabled) {
      document.documentElement.classList.remove(DARK);
      localStorage.theme = LIGHT;
      setIsEnabled(false);

      return;
    }

    document.documentElement.classList.add(DARK);
    localStorage.theme = DARK;
    setIsEnabled(true);
  }, [isEnabled]);

  return { isEnabled, toggle };
};

export default useDarkMode;
