import { Action, ACTION_ICONS, Computation } from "../utils";
import PrettyNumber from "./PrettyNumber";

type Props = {
  computation: Computation;
  className?: string;
};

const ComputationLine = ({
  computation: { operation, firstNumber, secondNumber, result },
  className,
}: Props) => (
  <div className="flex flex-wrap items-center gap-2 pb-2 leading-3">
    <PrettyNumber value={firstNumber} className={className} />
    <p className="text-blue-700 transition duration-700 dark:text-white">
      {ACTION_ICONS[operation]}
    </p>
    <PrettyNumber value={secondNumber} className={className} />
    <p className="text-blue-700 transition duration-700 dark:text-white">
      {ACTION_ICONS[Action.Equal]}
    </p>
    <PrettyNumber value={result} className={className} />
  </div>
);

export default ComputationLine;
