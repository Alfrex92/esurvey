import React from "react";
import Login from "./Login";
import styled from "styled-components";
import { spaceM } from "../styles/utilities/tools";

class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <Greetings className="t2">
          Hi! Welcome to DEKKI, the Game Communities for Strategic Players.
        </Greetings>
        <Login />
      </div>
    );
  }
}

const Greetings = styled.h1`
  margin: ${spaceM};
`;

export default Index;
