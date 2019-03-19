import React, { Component } from "react";
import { Consumer } from "../../store/context";

export default class Dashboard extends Component {
  closeSurvey = (surveys, id) => {
    this.setState({
      surveys: surveys.map(survey => {
        if (id === survey.id) {
          survey.open = !survey.open;
        }
        return survey;
      })
    });
  };

  render() {
    return (
      <div>
        <Consumer>
          {value => {
            const { surveys } = value;
            return (
              <React.Fragment>
                {surveys.map((s, i) => {
                  return (
                    <button
                      key={i}
                      onClick={() => this.closeSurvey(surveys, s.id)}
                    >
                      Close survey
                    </button>
                  );
                })}
                {console.log(surveys)}
              </React.Fragment>
            );
          }}
        </Consumer>
      </div>
    );
  }
}
