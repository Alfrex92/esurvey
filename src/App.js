import React, { Component } from "react";
import "./App.css";
import GlobalStyle from "./styles/Global";
import Index from "./components/Index";
import Header from "./components/layout/Header";
import Survey from "./components/pages/Survey";
import SurveyList from "./components/SurveyList";
import Dashboard from "./components/pages/Dashboard";
import NotFound from "./components/pages/NotFound";
import { Provider, Consumer } from "./store/context";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <Consumer>
              {({ user }) => {
                if (user) {
                  if (user.role === "admin") {
                    return (
                      <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route component={NotFound} />
                      </Switch>
                    );
                  } else if (user.role === "user") {
                    return (
                      <Switch>
                        <Route path="/" exact component={SurveyList} />
                        <Route path="/:id" exact component={Survey} />
                        <Route component={NotFound} />
                      </Switch>
                    );
                  }
                } else {
                  return (
                    <Switch>
                      <Route path="/" exact component={Index} />
                      <Route component={NotFound} />
                    </Switch>
                  );
                }
              }}
            </Consumer>
            <GlobalStyle />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
