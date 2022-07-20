import { Action } from "../utils";

export const ACTION_MAPPING = {
  options: [
    "SetDigit",
    "SetPoint",
    "Add",
    "Substract",
    "Multiply",
    "Divide",
    "Equal",
    "Delete",
    "Reset",
  ],
  mapping: {
    SetDigit: Action.SetDigit,
    SetPoint: Action.SetPoint,
    Add: Action.Add,
    Substract: Action.Substract,
    Multiply: Action.Multiply,
    Divide: Action.Divide,
    Equal: Action.Equal,
    Delete: Action.Delete,
    Reset: Action.Reset,
  },
} as const;

export const OPERATION_MAPPING = {
  options: ["Add", "Substract", "Multiply", "Divide"],
  mapping: {
    Add: Action.Add,
    Substract: Action.Substract,
    Multiply: Action.Multiply,
    Divide: Action.Divide,
  },
} as const;
