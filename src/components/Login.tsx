import React, {Component, ChangeEvent} from 'react';

import Logo from '../resources/assets/logo.png';

interface Props {
    username: string;
    password: string;
    onAuthenticate: Function;
    onCredentialsChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface State {}

export default class Login extends Component<Props, State> {
    render() {
        return (
            <div className="container vh-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-login p-4 shadow-sm">
                            <div className="card-body">
                                <div className="text-center">
                                    <img className="login-logo mx-auto" src={Logo} alt="Pixel"/>
                                </div>
                                <h3 className="login-title text-center">Authenticate to /_sentient</h3>

                                <div className="form-label-group editable-input-focused mt-3">
                                    <label className="mb-1">Username</label>
                                    <input type="text" name="username" onChange={this.props.onCredentialsChange} className="form-control" placeholder="Username"/>
                                </div>

                                <div className="form-label-groupe editable-input-focused mt-3">
                                    <label className="mb-1">Password</label>
                                    <input type="password" name="password" onChange={this.props.onCredentialsChange}className="form-control" placeholder="Password"/>
                                </div>

                                <div className="text-center mt-3 w-100">
                                    <button
                                        className="px-button pink text-center"
                                        onClick={() => this.props.onAuthenticate()}
                                    >
                                        Authenticate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}