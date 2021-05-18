import React, { Component } from 'react';

import {
    Card,
    CardBody,
    CardTitle,
    Container,
    ModalHeader
} from 'reactstrap';

import EditableInput from "./elements/EditableInput";

interface Props {
    name: string;
    email: string;
    phone: string;
    password: string;
    onChange: Function;
}

interface State { }

export default class AccountComponent extends Component<Props, State> {
    onChange = (field: string, value: string): void => {
        this.props.onChange(field, value);
    };

    render() {
        return (
            <>
                <Container fluid>
                    <h3 className="py-3 mb-3">Account</h3>
                    <Card className="conv-card card">
                        <CardBody>
                            <div>
                                <CardTitle tag="h5">Name</CardTitle>
                                <EditableInput
                                    name={"name"}
                                    value={this.props.name}
                                    submitText={"Update"}
                                    onChange={this.onChange}
                                    onSubmit={() => { }}
                                />
                            </div>
                            <div className="mt-3">
                            <CardTitle tag="h5">E-Mail</CardTitle>
                                <EditableInput
                                    name={"email"}
                                    value={this.props.email}
                                    submitText={"Update"}
                                    onChange={this.onChange}
                                    onSubmit={() => { }}
                                />
                            </div>
                            <div className="mt-3">
                                <CardTitle tag="h5">Phone Number</CardTitle>
                                <EditableInput
                                    name={"phone"}
                                    value={this.props.phone}
                                    submitText={"Update"}
                                    onChange={this.onChange}
                                    onSubmit={() => { }}
                                />
                            </div>
                            <div className="mt-3">
                                <CardTitle tag="h5">Linking Code</CardTitle>
                                <EditableInput
                                    type={"text"}
                                    name={"linkcode"}
                                    value={'LINK-CODE'}
                                    submitText={"Update"}
                                    onChange={this.onChange}
                                    onSubmit={() => { }}
                                />
                            </div>
                            <div className="mt-3">
                                <CardTitle tag="h5">Password</CardTitle>
                                <EditableInput
                                    type={"password"}
                                    name={"password"}
                                    value={this.props.password}
                                    mask={"*".repeat(8)}
                                    submitText={"Update"}
                                    onChange={this.onChange}
                                    onSubmit={() => { }}
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Container>
            </>
        );
    }
}