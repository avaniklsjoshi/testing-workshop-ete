import React from "react";

export const initialValue = 0;

const Counter: React.FunctionComponent = () => {
  const [count, setCount] = React.useState(initialValue);

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
