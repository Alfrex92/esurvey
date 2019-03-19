import React from "react";
import Counter from "../Counter";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Consumer } from "../../store/context";

const VoteDescription = props => (
  <div>
    <Consumer>
      {value => {
        const { surveys } = value,
          { params } = props.match,
          { country, countryName } = props,
          survey = surveys.find(s => s.id === params.id);
        return (
          <React.Fragment>
            {survey.open ? (
              <React.Fragment>
                <RemainingVotes>
                  <p>Click on up 3 players to place your votes.</p>
                  <Counter country={country} />
                </RemainingVotes>

                <p>The remainder of your votes must be for {countryName}.</p>
              </React.Fragment>
            ) : (
              <p>
                The top 3 vote earners in each region make up that region's team
              </p>
            )}
          </React.Fragment>
        );
      }}
    </Consumer>
  </div>
);

export default withRouter(VoteDescription);

const RemainingVotes = styled.div`
  display: flex;
  justify-content: center;
`;
