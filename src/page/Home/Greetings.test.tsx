import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import { TIMEOUT } from "dns";
import Greeting from "./Greeting";

describe("Home Page", () => {
  it("greeting renders", () => {
    render(<Greeting />);
  });
  it("greets stranger", () => {
    render(<Greeting />);
    expect(screen.getByText("Hello stranger!")).toBeInTheDocument();
  });
  it("greets user", () => {
    render(<Greeting name="Avani" />);
    expect(screen.getByText("Hello, dear Avani!")).toBeInTheDocument(); // test will break when html change
    expect(screen.getByText(/Avani/)).toBeInTheDocument(); // better approach
    expect(screen.getByText(/avani/i)).toBeInTheDocument();

    expect(screen.queryByText(/stranger/i)).not.toBeInTheDocument();
  });
  it("should not greet user as a stranger", () => {
    render(<Greeting name="Avani" />);
    expect(screen.queryByText(/stranger/i)).not.toBeInTheDocument();
  });
  it("greets user with empty string", () => {
    render(<Greeting name="" />);
    expect(screen.getByText("Hello stranger!")).toBeInTheDocument();
  });
});
