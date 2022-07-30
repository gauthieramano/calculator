import { FaPlay } from "react-icons/fa";
import { Action, ACTION_ICONS, Computation } from "../utils";
import ComputationLine from "./ComputationLine";
import ListButton from "./ListButton";
import PrettyNumber from "./PrettyNumber";

type Props = {
  operation?: Action;
  firstNumber: string;
  secondNumber: string;
  lastComputation?: Computation;
  previousComputations: Computation[];
  isListDisplayed: boolean;
  toggleList: () => void;
};

const LONG_LENGTH = 8;

const LAST_COMPUTATION = "Last computation:";
const PREVIOUS_COMPUTATIONS = "Previous computations:";

const Display = ({
  operation,
  firstNumber,
  secondNumber,
  lastComputation,
  previousComputations,
  isListDisplayed,
  toggleList,
}: Props) => {
  const isLongFirstNumber = firstNumber.length >= LONG_LENGTH;
  const isLongSecondNumber = secondNumber.length >= LONG_LENGTH;
  const hasDisplayableList = Boolean(previousComputations.length);
  const isListReallyDisplayed = isListDisplayed && hasDisplayableList;

  return (
    <div className="relative ">
      <div className="flex flex-col justify-between gap-2 bg-gradient-radial from-white via-sky-100 to-sky-100 px-8 pb-4 shadow-inner transition duration-700 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 dark:text-cyan-100 sm:rounded-lg">
        {/* **********************************************
         *             Previous computations             *
         *************************************************/}

        {
          // eslint-disable-next-line react/jsx-no-leaked-render
          isListReallyDisplayed && (
            <div className="mt-4 border-b border-sky-200 pb-2 dark:border-gray-600">
              <p className="mb-3 text-xs text-gray-400">
                {PREVIOUS_COMPUTATIONS}
              </p>
              {previousComputations.map((currentComputation) => (
                <div className="flex gap-3" key={currentComputation.time}>
                  <FaPlay
                    // eslint-disable-next-line react/forbid-component-props
                    className="text-cyan-600"
                  />
                  <ComputationLine
                    classname="text-xs"
                    computation={currentComputation}
                  />
                </div>
              ))}
            </div>
          )
        }

        {/* **********************************************
         *               Last computation                *
         *************************************************/}

        <div
          className={`mb-4 h-20 ${
            lastComputation
              ? "border-b border-sky-200 dark:border-gray-600"
              : ""
          }`}
        >
          {!!lastComputation && (
            <>
              <p
                className={`text-xs text-gray-400 ${
                  isListReallyDisplayed ? "mt-1 mb-3" : "mt-4"
                }`}
              >
                {LAST_COMPUTATION}
              </p>
              <ComputationLine
                classname="text-xs"
                computation={lastComputation}
              />
            </>
          )}
        </div>

        {/* **********************************************
         *           First number & operation            *
         *************************************************/}

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
                classname={
                  secondNumber
                    ? "text-sm"
                    : isLongFirstNumber
                    ? "text-xl sm:text-4xl thin:text-2xl"
                    : "text-3xl sm:text-4xl thin:text-4xl"
                }
                value={firstNumber}
              />
            </div>
            <p className="text-4xl text-blue-700 dark:text-white">
              {!!operation && ACTION_ICONS[operation]}
            </p>
          </div>
        </div>

        {/* **********************************************
         *                 Second number                 *
         *************************************************/}

        {!!secondNumber && (
          <div
            className={`h-16 self-end ${
              isLongSecondNumber
                ? "text-3xl sm:text-6xl thin:text-4xl"
                : "text-5xl sm:text-6xl thin:text-6xl"
            }`}
          >
            <PrettyNumber
              classname={
                isLongSecondNumber
                  ? "text-xl sm:text-4xl thin:text-2xl"
                  : "text-3xl sm:text-4xl thin:text-4xl"
              }
              value={secondNumber}
            />
          </div>
        )}
      </div>

      {/* **********************************************
       *                  List button                  *
       *************************************************/}

      {
        // eslint-disable-next-line react/jsx-no-leaked-render
        hasDisplayableList && (
          <ListButton
            classname="absolute top-[-0.75rem] right-8"
            isOpen={isListDisplayed}
            onClick={toggleList}
          />
        )
      }
    </div>
  );
};

export default Display;
