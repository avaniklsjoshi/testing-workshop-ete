import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import Counter, { initialValue } from "./Counter";
import userEvent from "@testing-library/user-event";

it("renders without crashing", () => {
  render(<Counter />);
});

it("displays a number initially", () => {
  render(<Counter />);

  expect(screen.getByText(/[0-9]/)).toBeInTheDocument();
});

it("display 0 initially", () => {
  render(<Counter />);

  expect(screen.getByText(/[0]/)).toBeInTheDocument();
});

it("display the initial value", () => {
  render(<Counter />);

  expect(screen.getByText(initialValue, { exact: false })).toBeInTheDocument();
});

it("should display a 1 after clicking the button once", async () => {
  render(<Counter />);

  const incrementButton = screen.getByRole("button", {
    name: /increment/i,
  });

  // Try to avoid act here. See the details & links at the bottom on
  // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-unnecessary-act.md
  await userEvent.click(incrementButton);

  expect(screen.getByText(/1/)).toBeInTheDocument();
});

it("should display a 20 after clicking the button 20 times", async () => {
  render(<Counter />);

  const incrementButton = screen.getByRole("button", {
    name: /increment/i,
  });

  for (let i = 0; i < 20; i++) {
    await userEvent.click(incrementButton);
  }

  expect(screen.getByText(/20/)).toBeInTheDocument();
});
