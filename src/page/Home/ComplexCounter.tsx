import React from "react";

const Counter: React.FunctionComponent = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <section>
        <h1>Counter</h1>
        <p>Count: {count}</p>
      </section>
      <section>Hello World</section>
      <div>We already have 100 users!</div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
