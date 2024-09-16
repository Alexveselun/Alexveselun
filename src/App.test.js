import { render, screen } from "@testing-library/react";
import App from "./App";

test("Rendering App Component....", () => {
  render(<App />);
  const linkElement = screen.getByText(/alexveselun/i);
  expect(linkElement).toBeInTheDocument();
});
