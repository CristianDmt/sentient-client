import { Component } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import TopBar from "./TopBar";
import SideBar from "./SideBar";
import Conversations from "../containers/conversations/Conversations";
import ConversationHistory from "../containers/conversations/ConversationHistory";
import ConversationActive from "../containers/conversations/ConversationActive";
import Performance from "../containers/Performance";
import Company from "../containers/company/Company";
import CompanyCreate from "../containers/company/CompanyCreate";
import Account from '../containers/Account';

import { Container } from "reactstrap";

interface Props {
  logout: () => void
}

interface State {
  sidebarOpen: boolean;
}

export default class MainAuthenticated extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      sidebarOpen: false
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar(): void {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  render() {
    return (
      <>
        <TopBar
          toggleSidebar={this.toggleSidebar}
        />
        <SideBar
          isOpen={this.state.sidebarOpen}
          toggle={this.toggleSidebar}
          logout={this.props.logout}
        />

        <div className="scrollable-view h-100">
          <Switch>
            <Route path="/conversations/history/:id">
              <ConversationHistory />
            </Route>
            <Route path="/conversations/active/:id">
              <ConversationActive />
            </Route>
            <Route path="/conversations">
              <Conversations />
            </Route>
            <Route path="/performance">
              <Performance />
            </Route>
            <Route path="/company/create">
              <CompanyCreate />
            </Route>
            <Route path="/company">
              <Company />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/">
              <Container fluid>
                <h3 className="py-3 mb-3">Page not Found :(</h3>
              </Container>
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}