import React from "react";

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/chat">
            <ChatView />
          </Route>
        </Switch>
    </Router>
  )
}
