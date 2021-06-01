import { Component } from 'react';

import {
  NavItem,
  NavLink
} from 'reactstrap';

import ModalConfirm from './elements/ModalConfirm';

interface Props {
  isAvailable: boolean;
  toggleDuty: () => void;
}

interface State {
  isDutyModalOpen: boolean;
}

export default class DutyControllerComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isDutyModalOpen: false
    };
  }

  toggleDutyModal = (): void => {
    this.setState({
      isDutyModalOpen: !this.state.isDutyModalOpen,
    });
  }

  toggleDuty = (): void => {
    this.setState({
      isDutyModalOpen: false
    }, () => {
      this.props.toggleDuty();
    });
  }

  render() {
    return (
      <>
        <NavItem
          onClick={this.toggleDutyModal}
          className={`nav-item-button duty ${this.props.isAvailable ? `active` : ``}`}
        >
          <NavLink>
            {this.props.isAvailable ? <span>AVAILABLE</span> : <span>NOT AVAILABLE</span>}
          </NavLink>
        </NavItem>
        <ModalConfirm isOpen={this.state.isDutyModalOpen} onConfirm={this.toggleDuty} onReject={this.toggleDutyModal}>
          <span>
            Would you like to change your status to{' '}
            <strong>{!this.props.isAvailable ? <span className="text-success">AVAILABLE</span> : <span>NOT AVAILABLE</span>}</strong>?
          </span>
        </ModalConfirm>
      </>
    );
  }
}