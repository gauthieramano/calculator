import { Action } from "../utils";
import Key from "./Key";

type Props = {
  handleAction: (nextAction: Action, nextDigit?: number) => void;
};

const Keyboard = ({ handleAction }: Props) => (
  <div className="grid h-full grid-cols-4 gap-3 text-2xl font-bold mid:text-3xl tall:text-4xl">
    <Key action={Action.Reset} handleAction={handleAction} />
    <Key
      action={Action.Delete}
      handleAction={handleAction}
      className="col-span-2"
    />
    <Key action={Action.Divide} handleAction={handleAction} />

    <Key action={Action.SetDigit} handleAction={handleAction} digit={7} />
    <Key action={Action.SetDigit} handleAction={handleAction} digit={8} />
    <Key action={Action.SetDigit} handleAction={handleAction} digit={9} />
    <Key action={Action.Multiply} handleAction={handleAction} />

    <Key action={Action.SetDigit} handleAction={handleAction} digit={4} />
    <Key action={Action.SetDigit} handleAction={handleAction} digit={5} />
    <Key action={Action.SetDigit} handleAction={handleAction} digit={6} />
    <Key action={Action.Substract} handleAction={handleAction} />

    <Key action={Action.SetDigit} handleAction={handleAction} digit={1} />
    <Key action={Action.SetDigit} handleAction={handleAction} digit={2} />
    <Key action={Action.SetDigit} handleAction={handleAction} digit={3} />
    <Key action={Action.Add} handleAction={handleAction} />

    <Key
      action={Action.SetDigit}
      handleAction={handleAction}
      digit={0}
      className="col-span-2"
    />
    <Key
      action={Action.SetPoint}
      handleAction={handleAction}
      className="text-lg"
    />
    <Key action={Action.Equal} handleAction={handleAction} />
  </div>
);

export default Keyboard;
