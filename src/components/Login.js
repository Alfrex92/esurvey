import React, { Component } from "react";
import { Consumer } from "../store/context";
import TextInputGroup from "./utilities/TextInputGroup";
export default class Login extends Component {
  state = {
    name: "",
    pass: "",
    errors: {}
  };

  checkUser = (users, dispatch, onLogin, e) => {
    e.preventDefault();
    const user = users.find(
      u => u.user === this.state.name && u.password === this.state.pass
    );
    if (!user) return;
    dispatch({ type: "LOGIN", user });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, pass } = this.state;
    return (
      <div>
        <Consumer>
          {value => {
            const { users, dispatch } = value;
            return (
              <form
                onSubmit={this.checkUser.bind(
                  this,
                  users,
                  dispatch,
                  this.props.onLogin
                )}
              >
                <TextInputGroup
                  name="name"
                  type="text"
                  placeholder="Username"
                  autoComplete="name"
                  value={name}
                  onChange={this.onChange}
                />
                <TextInputGroup
                  name="pass"
                  type="password"
                  autoComplete="password"
                  placeholder="Password"
                  value={pass}
                  onChange={this.onChange}
                />

                <input type="submit" value="Login" />
              </form>
            );
          }}
        </Consumer>
      </div>
    );
  }
}
