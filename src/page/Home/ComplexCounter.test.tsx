import { render, screen, within } from "@testing-library/react";
import ComplexCounter from "./ComplexCounter";

it("initializes the counter with 0", () => {
  render(<ComplexCounter />);

  const counterSection = screen
    .getByRole("heading", { name: /counter/i })
    // eslint-disable-next-line testing-library/no-node-access
    .closest("section");

  // Better would probably be something else, worst case:
  // Implement your own queries: https://testing-library.com/docs/dom-testing-library/api-custom-queries
  // screen.getSectionByHeading("Counter");

  expect(counterSection).not.toBeNull();
  expect(counterSection).toBeInTheDocument();
  expect(within(counterSection!).getByText(/0/)).toBeInTheDocument();
  expect(within(counterSection!).getByText(/Count.*0/i)).toBeInTheDocument();
  expect(within(counterSection!).queryByText(/[1-9]/)).not.toBeInTheDocument();
});
