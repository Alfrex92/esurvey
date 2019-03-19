import React from "react";
import { Consumer } from "../store/context";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SurveyList = () => (
  <div>
    <ul>
      <Consumer>
        {value => {
          const { surveys } = value;
          return surveys.map((survey, id) => (
            <Survey key={id}>
              <Link to={survey.id}>{survey.title}</Link>
            </Survey>
          ));
        }}
      </Consumer>
    </ul>
  </div>
);

export default SurveyList;

const Survey = styled.li`
  a {
    color: white;
  }
`;

// .filter(s => s.open)
