import React from "react";
import styled from "styled-components";
import { spaceM } from "../../styles/utilities/tools";
import { Consumer } from "../../store/context";
import { withRouter } from "react-router";

const SurveyDescription = props => (
  <div className="container">
    <Consumer>
      {value => {
        const { surveys } = value,
          { params } = props.match,
          survey = surveys.find(s => s.id === params.id);
        return (
          <React.Fragment>
            <Headline className="t2">
              {survey.open ? (
                <p>Vote for players to represent your region's team</p>
              ) : (
                <p>Results of voting for each region</p>
              )}
            </Headline>
            <p>Select your region to browser players</p>
            {survey.open ? (
              <p>Vote for players to represent your region's team</p>
            ) : null}
          </React.Fragment>
        );
      }}
    </Consumer>
  </div>
);

export default withRouter(SurveyDescription);

const Headline = styled.h1`
  margin: ${spaceM} 0;
`;
