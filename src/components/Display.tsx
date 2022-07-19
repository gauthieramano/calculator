import { Action, ACTION_ICONS, Computation } from "../utils";
import ComputationLine from "./ComputationLine";
import PrettyNumber from "./PrettyNumber";

type Props = {
  operation?: Action;
  firstNumber: string;
  secondNumber: string;
  lastComputation?: Computation;
};

const Display = ({
  operation,
  firstNumber,
  secondNumber,
  lastComputation,
}: Props) => (
  <div className="flex h-full flex-col gap-2 rounded-lg bg-sky-100 px-8 py-4 shadow-inner transition duration-700 dark:bg-gray-900 dark:text-cyan-100">
    {lastComputation && (
      <div className="mb-4 border-b border-sky-200 dark:border-gray-600">
        <p className="text-xs text-gray-400">Last computation:</p>
        <ComputationLine computation={lastComputation} className="text-xs" />
      </div>
    )}

    <div className={`flex items-center gap-2 ${!secondNumber && "self-end"}`}>
      <div className={secondNumber ? "text-lg" : "text-4xl"}>
        <PrettyNumber
          value={firstNumber}
          className={secondNumber ? "text-sm" : "text-2xl"}
        />
      </div>
      <p className="text-4xl text-blue-700 dark:text-white">
        {operation && ACTION_ICONS[operation]}
      </p>
    </div>

    {secondNumber !== "" && (
      <div className="self-end text-4xl">
        <PrettyNumber value={secondNumber} className="text-2xl" />
      </div>
    )}
  </div>
);

export default Display;
