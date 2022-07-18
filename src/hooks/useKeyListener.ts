import { useCallback, useEffect } from "react";
import { Action, handledKeyActionMap, isHandledKey } from "../utils";

type HandleAction = (action: Action, digit?: number) => void;

const EVENT_TYPE = "keydown";

const useKeyListener = (handleAction: HandleAction) => {
  const handleEvent = useCallback(({ key }: KeyboardEvent) => {
    if (isHandledKey(key)) {
      handleAction(handledKeyActionMap[key]);

      return;
    }

    const potentialDigit = parseInt(key, 10);

    if (potentialDigit === 0 || potentialDigit) {
      handleAction(Action.SetDigit, potentialDigit);
    }
  }, []);

  useEffect(() => {
    window.addEventListener(EVENT_TYPE, handleEvent);

    return () => {
      window.removeEventListener(EVENT_TYPE, handleEvent);
    };
  }, [handleEvent]);
};

export default useKeyListener;
