import React, {Component} from 'react';
import {AxiosResponse, AxiosError} from "axios";
import {UserContext} from "../context/UserContext";
import update from 'immutability-helper';
import AccountComponent from '../components/Account';

interface State {
    name: string;
    email: string;
    phone: string;
    password: string;
}

interface Props {
}

export default class Account extends Component<Props, State> {
    static contextType = UserContext;
    context!: React.ContextType<typeof UserContext>;

    constructor(props: Props) {
        super(props);

        this.state = {
            name: "Cristian",
            email: "cristian@sentient.com",
            phone: "0726344487",
            password: ""
        }
    }

    componentDidMount() {
        if (this.context.userData) {
            this.setState({
                name: this.context.userData.name,
                email: this.context.userData.email,
                phone: this.context.userData.phone
            })
        }
    }

    render() {
        return <AccountComponent
            name={this.state.name}
            email={this.state.email}
            phone={this.state.phone}
            password={this.state.password}
            onChange={this.onProfileDetailsChange}
        />
    }

    onProfileDetailsChange = (field: string, value: string): void => {
        const newState = update(this.state, {
            [field]: {
                $set: value
            }
        });

        this.setState(newState);
    }

    onUpdateProfile = (): void => {
        console.log(this.state);
    }
}
