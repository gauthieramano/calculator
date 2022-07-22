import { render, screen } from "@testing-library/react";
import App from "./App";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,

      // eslint-disable-next-line @typescript-eslint/no-empty-function
      addListener() {},

      // eslint-disable-next-line @typescript-eslint/no-empty-function
      removeListener() {},
    };
  };

describe("App", () => {
  test("renders `calculator` text", () => {
    // WHEN
    render(<App />);

    // THEN
    const textElement = screen.getByText(/calculator/i);

    expect(textElement).toBeInTheDocument();
  });
});
