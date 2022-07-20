import { useCallback } from "react";
import useKeyListener from "../hooks/useKeyListener";
import useStore from "../hooks/useStore";
import { Action } from "../utils";
import Display from "./Display";
import Keyboard from "./Keyboard";
import Page from "./Page";

const App = () => {
  const {
    operation,
    firstNumber,
    secondNumber,
    lastComputation,
    setAction,
    setDigit,
  } = useStore();

  const handleAction = useCallback((nextAction: Action, nextDigit?: number) => {
    setAction(nextAction);
    setDigit(nextDigit);
  }, []);

  useKeyListener(handleAction);

  return (
    <Page
      displayComponent={
        <Display
          operation={operation}
          firstNumber={firstNumber}
          secondNumber={secondNumber}
          lastComputation={lastComputation}
        />
      }
      keyboardComponent={<Keyboard handleAction={handleAction} />}
    />
  );
};

export default App;
