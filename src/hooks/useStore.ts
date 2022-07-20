import { useEffect, useState } from "react";
import {
  Action,
  CHARS_MAX_QUANTITY,
  Computation,
  compute,
  isOperation,
  isValidValue,
  Operation,
  round,
} from "../utils";

const useStore = () => {
  const [action, setAction] = useState<Action>();
  const [digit, setDigit] = useState<number>();

  const [operation, setOperation] = useState<Operation>();
  const [firstNumber, setFirstNumber] = useState("0");
  const [secondNumber, setSecondNumber] = useState("");
  const [lastComputation, setLastComputation] = useState<Computation>();
  const [previousComputations, setPreviousComputations] = useState<
    Computation[]
  >([]);

  useEffect(() => {
    if (!action) {
      return;
    }

    setAction(undefined);

    /* ****************************************************
     *                       Reset                        *
     ******************************************************/

    if (action === Action.Reset) {
      setOperation(undefined);
      setFirstNumber("0");
      setSecondNumber("");

      return;
    }

    /* ****************************************************
     *  No operation & potentially no valid first number  *
     ******************************************************/

    if (operation === undefined) {
      if (action === Action.SetDigit) {
        if (firstNumber === "0") {
          setFirstNumber(`${digit}`);
        } else if (firstNumber === "-0") {
          setFirstNumber(`-${digit}`);
        } else if (firstNumber.length < CHARS_MAX_QUANTITY) {
          setFirstNumber(`${firstNumber}${digit}`);
        }

        return;
      }

      if (action === Action.SetPoint) {
        if (!firstNumber.includes(".")) {
          setFirstNumber(`${firstNumber}.`);
        }

        return;
      }

      if (firstNumber === "0") {
        if (action === Action.Substract) {
          setFirstNumber("-");
        }

        return;
      }

      if (action === Action.Delete) {
        setFirstNumber(firstNumber.substring(0, firstNumber.length - 1));

        return;
      }

      if (!isValidValue(firstNumber)) {
        return;
      }

      if (isOperation(action)) {
        setOperation(action);

        return;
      }

      return;
    }

    /* ****************************************************
     *         Has operation & valid first number         *
     ******************************************************/

    if (action === Action.SetDigit) {
      if (secondNumber === "0") {
        setSecondNumber(`${digit}`);
      } else if (secondNumber === "-0") {
        setSecondNumber(`-${digit}`);
      } else if (secondNumber.length < CHARS_MAX_QUANTITY) {
        setSecondNumber(`${secondNumber}${digit}`);
      }

      return;
    }

    if (action === Action.SetPoint) {
      if (!secondNumber.includes(".")) {
        setSecondNumber(`${secondNumber}.`);
      }

      return;
    }

    if (!secondNumber || firstNumber === "0") {
      if (action === Action.Delete) {
        setOperation(undefined);
      } else if (action === Action.Substract) {
        setSecondNumber("-");
      } else if (isOperation(action)) {
        setOperation(action);
      }

      return;
    }

    if (action === Action.Delete) {
      setSecondNumber(secondNumber.substring(0, secondNumber.length - 1));

      return;
    }

    if (!isValidValue(secondNumber)) {
      return;
    }

    /* ****************************************************
     *            The computation can be made             *
     ******************************************************/

    const validFirstNumber = parseFloat(firstNumber);
    const validSecondNumber = parseFloat(secondNumber);

    const rawResult = compute(operation, validFirstNumber, validSecondNumber);

    // See `round` JSDoc to understand why rounding is important
    const result = round(rawResult).toString();
    const isProperNextFirstNumber =
      result.length <= CHARS_MAX_QUANTITY && !result.includes("e");

    const properResult = isProperNextFirstNumber ? result : "0";

    if (isOperation(action) && properResult !== "0") {
      setOperation(action);
    } else {
      setOperation(undefined);
    }

    setFirstNumber(properResult);
    setSecondNumber("");

    if (lastComputation) {
      setPreviousComputations([...previousComputations, lastComputation]);
    }

    const nextLastComputation = {
      time: new Date().getTime().toString(),
      operation,
      firstNumber,
      secondNumber,
      result,
    };

    setLastComputation(nextLastComputation);
  }, [
    action,
    digit,
    operation,
    firstNumber,
    secondNumber,
    lastComputation,
    previousComputations,
  ]);

  return {
    operation,
    firstNumber,
    secondNumber,
    lastComputation,
    previousComputations,
    setAction,
    setDigit,
  };
};

export default useStore;
