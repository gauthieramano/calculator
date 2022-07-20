import { Computation } from "../utils";

const useEasterEgg = (
  firstNumber: string,
  secondNumber: string,
  computation?: Computation
) => {
  if (secondNumber === "123" || firstNumber === "123") {
    return "bg-sun";
  }

  return computation?.result === "666" ? "bg-fire" : "";
};

export default useEasterEgg;
