import { useState } from "react";

const useToggle = (isInitiallyEnabled = false) => {
  const [isEnabled, setEnabled] = useState(isInitiallyEnabled);

  const toggle = () => {
    if (isEnabled) {
      setEnabled(false);

      return;
    }

    setEnabled(true);
  };

  return [isEnabled, toggle] as const;
};

export default useToggle;
