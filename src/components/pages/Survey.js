import React, { Component } from "react";
import SurveyDescription from "../layout/SurveyDescription";
import MyTabs from "../MyTabs";
import { Consumer } from "../../store/context";
import { withRouter } from "react-router";

class Survey extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { surveys } = value,
            { params } = this.props.match,
            survey = surveys.find(s => s.id === params.id);
          if (!survey) this.props.history.push("/");
          return (
            <React.Fragment>
              <SurveyDescription />
              <MyTabs />
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default withRouter(Survey);
