import { Action, ACTION_ICONS, Computation } from "../utils";
import PrettyNumber from "./PrettyNumber";

type Props = {
  computation: Computation;
  classname?: string;
};

const ComputationLine = ({
  computation: { operation, firstNumber, secondNumber, result },
  classname,
}: Props) => (
  <div className="flex flex-wrap items-center gap-2 pb-2 leading-3">
    <PrettyNumber classname={classname} value={firstNumber} />
    <p className="text-blue-700 transition duration-700 dark:text-white">
      {ACTION_ICONS[operation]}
    </p>
    <PrettyNumber classname={classname} value={secondNumber} />
    <p className="text-blue-700 transition duration-700 dark:text-white">
      {ACTION_ICONS[Action.Equal]}
    </p>
    <PrettyNumber classname={classname} value={result} />
  </div>
);

export default ComputationLine;
