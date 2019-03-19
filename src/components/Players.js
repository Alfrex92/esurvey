import React from "react";
import { Consumer } from "../store/context";
import Player from "./Player";
import shortid from "shortid";
import styled from "styled-components";
import { media, spaceS, spaceM } from "../styles/utilities/tools";
import { withRouter } from "react-router";

const calculateTotalVotes = players => {
  return players.reduce((acc, player) => {
    if (player.voted) {
      return acc + 1;
    }
    return acc;
  }, 0);
};

const Players = props => (
  <MyPlayers>
    <Consumer>
      {value => {
        const { players, surveys } = value,
          sameCountry = player => player.country === props.country,
          totalVotes = calculateTotalVotes(players.filter(sameCountry));
        const { params } = props.match;
        const survey = surveys.find(s => s.id === params.id);

        return players
          .filter(sameCountry)
          .map(player => (
            <Player
              key={shortid.generate()}
              nickname={player.nickname}
              message={player.message}
              avatar={player.avatarUrl}
              voted={player.voted}
              totalVotes={totalVotes}
              dispatch={value.dispatch}
              likes={player.likes}
              panelID={props.panelID}
              surveyOpen={survey.open}
            />
          ));
      }}
    </Consumer>
  </MyPlayers>
);

export default withRouter(Players);

const MyPlayers = styled.div`
  margin: ${spaceM} 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: ${spaceM};
  ${media.med`
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: ${spaceS};
    `}
`;
