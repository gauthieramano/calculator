import { Action } from "../utils";
import Key from "./Key";

type Props = {
  handleAction: (nextAction: Action, nextDigit?: number) => void;
};

const Keyboard = ({ handleAction }: Props) => (
  <div className="grid h-full grid-cols-4 gap-2 text-2xl font-bold sm:gap-3 mid:text-3xl tall:text-4xl">
    <Key
      action={Action.Reset}
      classname="text-xl mid:text-3xl tall:text-4xl"
      handleAction={handleAction}
    />
    <Key
      action={Action.Delete}
      classname="col-span-2 text-3xl mid:text-4xl tall:text-5xl"
      handleAction={handleAction}
    />
    <Key action={Action.Divide} handleAction={handleAction} />

    <Key action={Action.SetDigit} digit={7} handleAction={handleAction} />
    <Key action={Action.SetDigit} digit={8} handleAction={handleAction} />
    <Key action={Action.SetDigit} digit={9} handleAction={handleAction} />
    <Key action={Action.Multiply} handleAction={handleAction} />

    <Key action={Action.SetDigit} digit={4} handleAction={handleAction} />
    <Key action={Action.SetDigit} digit={5} handleAction={handleAction} />
    <Key action={Action.SetDigit} digit={6} handleAction={handleAction} />
    <Key action={Action.Substract} handleAction={handleAction} />

    <Key action={Action.SetDigit} digit={1} handleAction={handleAction} />
    <Key action={Action.SetDigit} digit={2} handleAction={handleAction} />
    <Key action={Action.SetDigit} digit={3} handleAction={handleAction} />
    <Key action={Action.Add} handleAction={handleAction} />

    <Key
      action={Action.SetDigit}
      classname="col-span-2"
      digit={0}
      handleAction={handleAction}
    />
    <Key
      action={Action.SetPoint}
      classname="text-sm mid:text-base tall:text-lg"
      handleAction={handleAction}
    />
    <Key action={Action.Equal} handleAction={handleAction} />
  </div>
);

export default Keyboard;
