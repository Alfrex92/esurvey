import React, { Component } from "react";
import { Consumer } from "../store/context";
import { withRouter } from "react-router";

class Logout extends Component {
  logout = dispatch => {
    dispatch({ type: "LOGOUT" });
    const {
      history: { push }
    } = this.props;
    push("/");
  };
  render() {
    return (
      <div>
        <Consumer>
          {value => {
            const { dispatch } = value;
            return (
              <React.Fragment>
                <button onClick={() => this.logout(dispatch)}>Log out</button>
              </React.Fragment>
            );
          }}
        </Consumer>
      </div>
    );
  }
}

export default withRouter(Logout);
