import { useState } from "react";

const useToggle = () => {
  const [isEnabled, setEnabled] = useState(false);

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
