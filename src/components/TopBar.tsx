import { Component } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import Logo from '../resources/assets/logo.png';
import { Link } from "react-router-dom";
import DutyController from '../containers/DutyController';

interface Props {
  toggleSidebar: () => void;
}

interface State {
  isMobileMenuCollapsed: boolean;
}

export default class TopBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isMobileMenuCollapsed: false
    };
  }

  toggleMenu() {
    this.setState({ isMobileMenuCollapsed: !this.state.isMobileMenuCollapsed });
  }

  render() {
    return (
      <>
        <Navbar className="topbar" color="light" light expand="lg">
          <NavbarToggler className="shadow-none" onClick={() => this.props.toggleSidebar()} />
          <NavbarBrand href="/">
            <img className="logo align-middle mr-2" src={Logo} alt="Sentient" />
            <span className="brand align-middle">/_sentient</span>
          </NavbarBrand>
          <NavbarToggler className="shadow-none" onClick={() => this.toggleMenu()} />
          <Collapse isOpen={this.state.isMobileMenuCollapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink>
                  <Link to="/conversations/active/1"><em className="ion ion-ios-chatbubbles"></em></Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/notifications"><em className="ion ion-ios-notifications"></em></Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/account"><em className="ion ion-ios-person"></em></Link>
                </NavLink>
              </NavItem>
              <DutyController />
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}