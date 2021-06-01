import React, { Component, ChangeEvent } from 'react';
import { Redirect } from "react-router-dom";
import update from "immutability-helper";
import { UserContext } from "../context/UserContext";
import Login from "../components/Login";

interface State {
  username: string;
  password: string;
}

interface Props {
}

export default class Main extends Component<Props, State> {
  static contextType = UserContext;
  context!: React.ContextType<typeof UserContext>;

  constructor(props: Props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    }
  }

  render() {
    return this.context.authVerified && !this.context.isAuthenticated ?
      <Login
        username={this.state.username}
        password={this.state.password}
        onCredentialsChange={this.onCredentialsChange}
        onAuthenticate={this.onAuthenticate}
      /> : <Redirect to="/" />;
  }

  onCredentialsChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newState = update(this.state, {
      [e.target.name]: {
        $set: e.target.value
      }
    });

    this.setState(newState);
  }

  onAuthenticate = async () => {
    this.context.authenticate(this.state.username, this.state.password);
  }
}