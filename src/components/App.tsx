import { useCallback } from "react";
import useEasterEgg from "../hooks/useEasterEgg";
import useKeyListener from "../hooks/useKeyListener";
import useStore from "../hooks/useStore";
import useToggle from "../hooks/useToggle";
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
    previousComputations,
    setAction,
    setDigit,
  } = useStore();

  const handleAction = useCallback((nextAction: Action, nextDigit?: number) => {
    setAction(nextAction);
    setDigit(nextDigit);
  }, []);

  useKeyListener(handleAction);

  const backgroundClassName = useEasterEgg(
    firstNumber,
    secondNumber,
    lastComputation
  );

  const [isListDisplayed, toggleList] = useToggle();

  return (
    <Page
      hasFullHeight={isListDisplayed}
      displayComponent={
        <Display
          operation={operation}
          firstNumber={firstNumber}
          secondNumber={secondNumber}
          lastComputation={lastComputation}
          previousComputations={previousComputations}
          isListDisplayed={isListDisplayed}
          toggleList={toggleList}
        />
      }
      keyboardComponent={<Keyboard handleAction={handleAction} />}
      backgroundClassName={backgroundClassName}
    />
  );
};

export default App;
