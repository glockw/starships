import { render, screen } from "@testing-library/react";
import App from "./App";

describe("renders app", () => {
  render(<App />);
  const selectElement = screen.getByText(/Manufacturers/i);
  it("should render  select manufacturers", () => {
    expect(selectElement).toBeInTheDocument();
  });
});
