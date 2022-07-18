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

export const isHandledKey = (key: string | HandledKey): key is HandledKey =>
  HANDLED_KEYS.includes(key as HandledKey);
