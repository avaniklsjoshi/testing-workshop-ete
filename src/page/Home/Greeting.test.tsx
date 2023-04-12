import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

it("renders without crashing", () => {
  render(<Greeting />);
});

it("greets anonymous users as a stranger", () => {
  render(<Greeting />);

  expect(screen.getByText(/Hello|Welcome/)).toBeInTheDocument();
});

it("greets known users with their name", () => {
  render(<Greeting name="Edwin" />);

  expect(screen.getByText(/edwin/i)).toBeInTheDocument();
});

it("does not greet known users as strangers", () => {
  render(<Greeting name="Edwin" />);

  // Talk about it after the brake
  expect(screen.queryByText(/stranger/i)).not.toBeInTheDocument();
});

it("greets users with an empty string as a stranger", () => {
  render(<Greeting name="" />);

  // This is rather fragil
  expect(screen.queryByText(/Hello, dear !/i)).not.toBeInTheDocument();
});
