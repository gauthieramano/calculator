import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders `calculator` text", () => {
  // WHEN
  render(<App />);

  // THEN
  const textElement = screen.getByText(/calculator/i);

  expect(textElement).toBeInTheDocument();
});
