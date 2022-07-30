import { useCallback } from "react";
import { Action, ACTION_ICONS } from "../utils";

type Props = {
  action: Action;
  digit?: number;
  classname?: string;
  handleAction: (nextAction: Action, nextDigit?: number) => void;
};

const Key = ({ action, digit, classname, handleAction }: Props) => {
  const isSetDigit = action === Action.SetDigit;
  const title =
    action === Action.Delete
      ? "Delete last digit/sign"
      : action === Action.Reset
      ? "Reset current computation"
      : "";

  const handleClick = useCallback(() => handleAction(action, digit), []);

  return (
    <button
      className={`flex items-center justify-center rounded-full text-white shadow-md ${
        isSetDigit
          ? "bg-blue-700 hover:bg-blue-500"
          : "bg-cyan-600 hover:bg-cyan-400"
      } ${classname}`}
      onClick={handleClick}
      title={title}
      type="button"
    >
      {isSetDigit ? digit : ACTION_ICONS[action]}
    </button>
  );
};

export default Key;
