import { useState } from "react";

const useToggle = (isInitiallyEnabled = false) => {
  const [isEnabled, setIsEnabled] = useState(isInitiallyEnabled);

  const toggle = () => {
    if (isEnabled) {
      setIsEnabled(false);

      return;
    }

    setIsEnabled(true);
  };

  return [isEnabled, toggle] as const;
};

export default useToggle;
