import {
  FaBackspace,
  FaCalculator,
  FaCircle,
  FaDivide,
  FaEquals,
  FaMinus,
  FaPlus,
  FaPowerOff,
  FaTimes,
} from "react-icons/fa";

export enum HandledKey {
  Point = ".",
  Point2 = ",",
  Addition = "+",
  Substraction = "-",
  Multiplication = "*",
  Multiplication2 = "x",
  Division = "/",
  Division2 = ":",
  Equality = "=",
  Equality2 = "Enter",
  Deletion = "Backspace",
  Reset = "Escape",
}

export enum Action {
  SetDigit = 1,
  SetPoint = 2,
  Add = 3,
  Substract = 4,
  Multiply = 5,
  Divide = 6,
  Equal = 7,
  Delete = 8,
  Reset = 9,
}

export type Operation =
  | Action.Add
  | Action.Substract
  | Action.Multiply
  | Action.Divide;

export type Computation = {
  time: string;
  operation: Operation;
  firstNumber: string;
  secondNumber: string;
  result: string;
};

export const ACTION_ICONS = {
  [Action.SetDigit]: <FaCalculator />,
  [Action.SetPoint]: <FaCircle />,
  [Action.Add]: <FaPlus />,
  [Action.Substract]: <FaMinus />,
  [Action.Multiply]: <FaTimes />,
  [Action.Divide]: <FaDivide />,
  [Action.Equal]: <FaEquals />,
  [Action.Delete]: <FaBackspace />,
  [Action.Reset]: <FaPowerOff />,
};

export const handledKeyActionMap: Record<HandledKey, Action> = {
  [HandledKey.Point]: Action.SetPoint,
  [HandledKey.Point2]: Action.SetPoint,
  [HandledKey.Addition]: Action.Add,
  [HandledKey.Substraction]: Action.Substract,
  [HandledKey.Multiplication]: Action.Multiply,
  [HandledKey.Multiplication2]: Action.Multiply,
  [HandledKey.Division]: Action.Divide,
  [HandledKey.Division2]: Action.Divide,
  [HandledKey.Equality]: Action.Equal,
  [HandledKey.Equality2]: Action.Equal,
  [HandledKey.Deletion]: Action.Delete,
  [HandledKey.Reset]: Action.Reset,
};

const HANDLED_KEYS = Object.values(HandledKey);

export const CHARS_MAX_QUANTITY = 12;

export const isHandledKey = (key: string): key is HandledKey =>
  HANDLED_KEYS.includes(key as HandledKey);

export const isOperation = (action: Action): action is Operation =>
  [Action.Add, Action.Substract, Action.Multiply, Action.Divide].includes(
    action
  );

export const isValidValue = (value: string) =>
  value !== "-" && value !== "-." && parseFloat(value) !== 0;

export const compute = (
  operation: Operation,
  firstNumber: number,
  secondNumber: number
) =>
  operation === Action.Add
    ? firstNumber + secondNumber
    : operation === Action.Substract
    ? firstNumber - secondNumber
    : operation === Action.Multiply
    ? firstNumber * secondNumber
    : firstNumber / secondNumber;

/**
 * ## Round numbers to:
 * - avoid JavaScript lack of precision
 * - improve readability
 *
 * Eg (with `CHARS_MAX_QUANTITY = 12`):
 *
 * ```
 * 1_000_000_000_000.1 + 0.2 =  1000000000000.2999  ->  1000000000000
 *           700.94 - 640.14 =  60.80000000000007   ->  60.8
 *             -1000.1 - 0.2 = -1000.3000000000001  -> -1000.3
 *                11.1 + 0.2 =  11.299999999999999  ->  11.3
 *                0.14 * 100 =  14.000000000000002  ->  14
 *                 0.1 + 0.2 =  0.30000000000000004 ->  0.3
 * ```
 **/
export const round = (value: number) => {
  const stringValue = value.toString();

  if (stringValue.length <= CHARS_MAX_QUANTITY) {
    return value;
  }

  const pointIndex = stringValue.indexOf(".");

  if (pointIndex === -1) {
    return value;
  }

  // Get rid of decimales if there is already a lot of digits before the point
  const decimalesQuantity = Math.max(0, CHARS_MAX_QUANTITY - pointIndex - 1);

  const precision = Math.pow(10, decimalesQuantity);

  return Math.round(value * precision) / precision;
};
