import React from "react";
import Counter from "./Counter";

interface Props {
  name?: string;
}

const Greeting: React.FunctionComponent<Props> = ({ name }) => {
  if (!name) {
    return (
      <div>
        Hello stranger!
        <Counter />
      </div>
    );
  }
  return <div>Hello, dear {name}!</div>;
};

export default Greeting;
