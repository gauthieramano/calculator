import { useState } from "react";
import { Action } from "../utils";

const useStore = () => {
  const [action, setAction] = useState<Action>();
  const [digit, setDigit] = useState<number>();

  return {
    action,
    digit,
    setAction,
    setDigit,
  };
};

export default useStore;
