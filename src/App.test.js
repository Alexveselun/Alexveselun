import { render, screen } from "@testing-library/react";
import App from "./App";

test("Rendering App Component....", () => {
  render(<App />);
  const linkElement = screen.getByText(/Mr.Yanyk/i);
  expect(linkElement).toBeInTheDocument();
});
