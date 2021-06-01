import React, { Component } from 'react';

import {
  Input,
  InputGroupAddon,
  InputGroup,
  Button
} from "reactstrap";

import { InputType } from "reactstrap/es/Input";

interface Props {
  type?: InputType;
  name: string;
  value?: string;
  mask?: string;
  submitText: string;
  onChange: (field: string, value: string) => void;
  onSubmit: () => void;
}

interface State {
  isEditing: boolean;
}

export default class EditableInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  toggleEditing = (): void => {
    this.setState({ isEditing: !this.state.isEditing })
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target) {
      this.props.onChange(e.target.name, e.target.value);
    }
  };

  onSubmit = (): void => {
    this.setState({ isEditing: false }, () => {
      this.props.onSubmit();
    });
  };

  render() {
    return (
      <>
        {
          !this.state.isEditing && <div>
            {this.props.value || this.props.mask}
            <button className="edit-input-action" onClick={this.toggleEditing}>
              <em className="ion ion-md-create"></em>
              <span>Edit</span>
            </button>
          </div>
        }
        {
          this.state.isEditing && <div>
            <InputGroup className="editable-input-focused">
              <Input type={this.props.type ? this.props.type : "text"} name={this.props.name} value={this.props.value ? this.props.value : ''} onChange={this.onChange} />
              <InputGroupAddon addonType="append">
                <Button onClick={this.onSubmit}>{this.props.submitText}</Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
        }
      </>
    );
  }
}