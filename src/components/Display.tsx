import { Action, ACTION_ICONS } from "../utils";

type Props = {
  action?: Action;
  digit?: number;
};

const DEFAULT_LABEL = "-";

const Display = ({ action, digit }: Props) => (
  <div className="grid grid-cols-[auto_auto_1fr] items-end gap-2 rounded-lg bg-sky-100 px-8 py-4 shadow-inner">
    <p>Action</p>
    <p>:</p>
    {action ? (
      <p className="text-2xl">{ACTION_ICONS[action]}</p>
    ) : (
      <p>{DEFAULT_LABEL}</p>
    )}
    <p>Digit</p>
    <p>:</p>
    <p className="text-2xl">{digit !== undefined ? digit : DEFAULT_LABEL}</p>
  </div>
);

export default Display;
