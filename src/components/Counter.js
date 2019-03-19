import React from "react";
import { Consumer } from "../store/context";
import styled from "styled-components";

const calculateTotalVotes = players => {
  return players.reduce((acc, player) => {
    if (player.voted) {
      return acc + 1;
    }
    return acc;
  }, 0);
};

export default ({ country }) => (
  <React.Fragment>
    <StyledCounter>
      (
      <CounterValue>
        <Consumer>
          {value =>
            3 -
            calculateTotalVotes(
              value.players.filter(player => player.country === country)
            )
          }
        </Consumer>
      </CounterValue>
      votes remaining)
    </StyledCounter>
  </React.Fragment>
);

const StyledCounter = styled.p`
  color: gray;
`;

const CounterValue = styled.span`
  font-weight: 700;
  margin-right: 1px;
`;
