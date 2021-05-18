import React, { Component } from 'react';

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
import ModalConfirm from './elements/ModalConfirm';

interface Props {
    toggleSidebar: () => void;
}

interface State {
    isMobileMenuCollapsed: boolean;
    isDutyModalOpen: boolean;
    isOnDuty: boolean;
}

export default class TopBar extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            isMobileMenuCollapsed: false,
            isDutyModalOpen: false,
            isOnDuty: false
        };
    }

    toggleMenu() {
        this.setState({isMobileMenuCollapsed: !this.state.isMobileMenuCollapsed});
    }

    toggleDutyModal = (): void => {
        this.setState({
            isDutyModalOpen: !this.state.isDutyModalOpen,
        });
    }

    toggleDuty = (): void => {
        this.setState({
            isDutyModalOpen: false,
            isOnDuty: !this.state.isOnDuty
        });
    }

    render() {
        return (
            <>
                <Navbar className="topbar" color="light" light expand="lg">
                    <NavbarToggler className="shadow-none" onClick={() => this.props.toggleSidebar()} />
                    <NavbarBrand href="/">
                        <img className="logo align-middle mr-2" src={Logo} alt="Cleany"/>
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
                            <NavItem 
                                onClick={this.toggleDutyModal} 
                                className={`nav-item-button duty ${this.state.isOnDuty ? `active` : ``}`}
                            >
                                <NavLink>
                                    { this.state.isOnDuty ? <span>READY</span> : <span>NOT READY</span> }
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <ModalConfirm isOpen={this.state.isDutyModalOpen} onConfirm={this.toggleDuty} onReject={this.toggleDutyModal}>
                        <span>
                            Would you like to change your status to{' '}
                            <strong>{ !this.state.isOnDuty ? <span className="text-success">READY</span> : <span>NOT READY</span> }</strong>?
                        </span>
                    </ModalConfirm>
                </Navbar>
            </>
        );
    }
}