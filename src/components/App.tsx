import { useCallback } from "react";
import useKeyListener from "../hooks/useKeyListener";
import useStore from "../hooks/useStore";
import { Action } from "../utils";
import Page from "./Page";

const App = () => {
  const { action, digit, setAction, setDigit } = useStore();

  const handleAction = useCallback((nextAction: Action, nextDigit?: number) => {
    setAction(nextAction);
    setDigit(nextDigit);
  }, []);

  useKeyListener(handleAction);

  return <Page action={action} digit={digit} />;
};

export default App;
