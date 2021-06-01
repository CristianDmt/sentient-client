import React, { Component } from 'react';

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
  InputGroup,
  InputGroupAddon,
  Input
} from 'reactstrap';
import { Link } from "react-router-dom";

interface Props {
}

interface State {
  expanded: boolean;
}

export default class ConversationHistoryComponent extends Component<Props, State> {
  render() {
    return (
      <>
        <Container fluid className="lock-height-100">
          <h3 className="py-3 mb-3">Conversation History</h3>
          <Row>
            <Col lg="8">
              <h6 className="uc-page-title mb-3">Conversation Log</h6>
              <Card className="conv-card">
                <CardBody className="overflow-auto">
                  <CardTitle className="uc-page-title mb-1">Callum T.</CardTitle>
                  <Row className="conv-bubble external blue">
                    <Col className="col-10 align-self-center">
                      <span>Hello, I need help!</span>
                    </Col>
                    <Col className="col-2 conv-bubble-rating">
                      <em className="ion ion-ios-thumbs-up text-success"></em>
                    </Col>
                  </Row>
                  <Row className="conv-bubble self">
                    <span>Hello, how may I help you?</span>
                  </Row>
                  <CardTitle className="uc-page-title mb-1">Callum T.</CardTitle>
                  <Row className="conv-bubble external blue">
                    <Col className="col-10 align-self-center">
                      <span>I can't login to my account</span>
                    </Col>
                    <Col className="col-2 conv-bubble-rating">
                      <em className="ion ion-ios-thumbs-up text-success"></em>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter className="conv-actions text-md-right text-center">
                  <Row>
                    <Col md="12">
                      <em>This conversation has ended.</em>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
            <Col>
              <h6 className="uc-page-title mb-3 mt-lg-0 mt-3">Conversation Details</h6>
              <Card className="conv-card" style={{ maxHeight: 440 }}>
                <CardBody className="overflow-auto">
                  <CardTitle tag="h5">Case ID</CardTitle>
                  <CardText>#443</CardText>
                  <CardTitle tag="h5">Assisted Customer</CardTitle>
                  <CardText>Callum Tuna</CardText>
                  <CardTitle tag="h5">Start Date</CardTitle>
                  <CardText>9 May, 2021 at 13:30</CardText>
                  <CardTitle tag="h5">End Date</CardTitle>
                  <CardText>9 May, 2021 at 13:36</CardText>
                  <CardTitle tag="h5">Analysis</CardTitle>
                  <CardText className="text-success">Positive</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}