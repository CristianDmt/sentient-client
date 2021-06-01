import { Component } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import ConversationCustomer from '../containers/conversations/ConversationCustomer';
import Login from "../containers/Login";

interface Props { }

interface State { }

export default class MainNotAuthenticated extends Component<Props, State> {
  render() {
    return (
      <>
        <Switch>
          <Route path="/conversation">
            <ConversationCustomer />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </>
    );
  }
}