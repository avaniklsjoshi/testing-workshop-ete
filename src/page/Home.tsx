import { Header, Main } from "../component/Layout";
import React from "react";
import Greeting from "./Home/Greeting";
import Counter from "./Home/Counter";

const Home: React.FunctionComponent = () => {
  return (
    <>
      <Header>Welcome</Header>
      <Main>
        <Greeting />
          <Counter />
      </Main>
    </>
  );
};

export default Home;
