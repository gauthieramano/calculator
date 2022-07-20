import { Action, ACTION_ICONS, Computation } from "../utils";
import ComputationLine from "./ComputationLine";
import PrettyNumber from "./PrettyNumber";

type Props = {
  operation?: Action;
  firstNumber: string;
  secondNumber: string;
  lastComputation?: Computation;
};

const LONG_LENGTH = 8;

const Display = ({
  operation,
  firstNumber,
  secondNumber,
  lastComputation,
}: Props) => {
  const isLongFirstNumber = firstNumber.length >= LONG_LENGTH;
  const isLongSecondNumber = secondNumber.length >= LONG_LENGTH;

  return (
    <div className="flex flex-col justify-between gap-2 rounded-lg bg-sky-100 px-8 py-4 shadow-inner transition duration-700 dark:bg-gray-900 dark:text-cyan-100">
      <div className="mb-4 h-16 border-b border-sky-200 dark:border-gray-600">
        {lastComputation && (
          <>
            <p className="text-xs text-gray-400">Last computation:</p>
            <ComputationLine
              computation={lastComputation}
              className="text-xs"
            />
          </>
        )}
      </div>

      <div
        className={`flex items-end ${
          secondNumber ? "h-9" : "h-[6.75rem] self-end" // h-9 + gap-2 + h-16 = 6.75rem
        }`}
      >
        <div className="flex items-center gap-2">
          <div
            className={
              secondNumber
                ? "text-lg"
                : isLongFirstNumber
                ? "text-3xl sm:text-6xl thin:text-4xl"
                : "text-5xl sm:text-6xl thin:text-6xl"
            }
          >
            <PrettyNumber
              value={firstNumber}
              className={
                secondNumber
                  ? "text-sm"
                  : isLongFirstNumber
                  ? "text-xl sm:text-4xl thin:text-2xl"
                  : "text-3xl sm:text-4xl thin:text-4xl"
              }
            />
          </div>
          <p className="text-4xl text-blue-700 dark:text-white">
            {operation && ACTION_ICONS[operation]}
          </p>
        </div>
      </div>

      {secondNumber !== "" && (
        <div
          className={`h-16 self-end ${
            isLongSecondNumber
              ? "text-3xl sm:text-6xl thin:text-4xl"
              : "text-5xl sm:text-6xl thin:text-6xl"
          }`}
        >
          <PrettyNumber
            value={secondNumber}
            className={
              isLongSecondNumber
                ? "text-xl sm:text-4xl thin:text-2xl"
                : "text-3xl sm:text-4xl thin:text-4xl"
            }
          />
        </div>
      )}
    </div>
  );
};

export default Display;
