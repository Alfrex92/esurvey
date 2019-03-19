import React, { Component } from "react";
import players from "../data/players_teams";
import users from "../data/users";

const Context = React.createContext();

// need to add player votes remaining y se tiene que actualizar cada vez que le doy click
// PERO no voy a alterar los atributos
// ver el counter de brian

const reducer = (state, action) => {
  switch (action.type) {
    case "LIKE_INCREASE":
      return {
        ...state,
        players: state.players.map(player => {
          if (player.nickname !== action.nickname) {
            return player;
          }
          return {
            ...player,
            voted: true,
            likes: player.likes + 1
          };
        })
      };
    case "LIKE_DECREASE":
      return {
        ...state,
        players: state.players.map(player => {
          if (player.nickname !== action.nickname) {
            return player;
          }
          return {
            ...player,
            voted: false,
            likes: player.likes - 1
          };
        })
      };
    case "VOTE_COUNTER":
      return console.log("hi");
    case "LOGIN":
      return {
        ...state,
        user: action.user
      };
    case "LOGOUT":
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  dispatch = action => {
    this.setState(state => reducer(state, action));
  };
  state = {
    players,
    users,
    user: null,
    dispatch: this.dispatch,
    surveys: [
      {
        id: "regionalsurvey",
        title: "Regional Survey",
        description: "",
        open: true,
        voted: [
          {
            userID: "hi",
            playersID: [1, 2, 3]
          },
          {
            userID: "hi2",
            playersID: [2, 3, 6]
          }
        ]
      }
    ]
    // showLogin: false,
    // country: "jp"
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        <div>{this.props.children}</div>
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
