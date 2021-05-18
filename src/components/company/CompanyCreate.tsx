import {
    Container,
    Row,
    Col,
    Card,
    Button,
    CardTitle,
    CardText,
    CardBody,
    CardFooter,
    Input
} from 'reactstrap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
}

const CompanyCreateComponent = (props: Props) => {
    return (
        <>
            <Container fluid>
                <h3 className="py-3 mb-3">Company</h3>
                <Row>
                    <Col lg="7">
                        <h6 className="uc-page-title mb-3">Create Company</h6>
                        <Card className="conv-card">
                            <CardBody>
                                <CardTitle tag="h5">Company Name</CardTitle>
                                <Input type="text" className="px-input align-middle w-100"/>
                            </CardBody>
                            <CardFooter className="conv-actions text-md-right text-center">
                                <Link to="/company">
                                    <Button className="px-button pink shadow-none">
                                        Create
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col lg="5" className="mt-lg-0 mt-5">
                        <h6 className="uc-page-title mb-3"><em className="ion ion-ios-help-circle"></em> Help</h6>
                        <Card className="conv-card">
                            <CardBody>
                                <CardTitle tag="h5">Should I create a company?</CardTitle>
                                <CardText>Only create a company if you are an early adopter of Sentient platform.</CardText>
                                <CardTitle tag="h5">How do I join a company?</CardTitle>
                                <CardText>
                                    If you got here it means that you have created a <em>limited access</em> account.
                                    In order to be added to a company you should share your Linking Code found in your Account section with your employer.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CompanyCreateComponent;