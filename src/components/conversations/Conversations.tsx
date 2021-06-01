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
  Collapse
} from 'reactstrap';
import { Link } from "react-router-dom";

interface Props {
}

interface State {
  expanded: boolean;
}

export default class ConversationsComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      expanded: false
    }
  }

  toggleDetails = (): void => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  render() {
    return (
      <>
        <Container fluid>
          <h3 className="py-3 mb-3">Conversations</h3>
          <Row>
            <Col>
              <h6 className="uc-page-title mb-3">Today</h6>
              <Card className="conv-card">
                <div className="conv-status-decoration">&nbsp;</div>
                <CardBody>
                  <Row>
                    <Col md="9" lg="10">
                      <CardTitle tag="h5" className="conv-title">Case #443 with Callum T.</CardTitle>
                      <CardText className="conv-summary">Resolved in 5 minutes 36 seconds.</CardText>
                      <CardTitle tag="h5">Assisted Customer</CardTitle>
                      <CardText>Callum Tuna</CardText>
                      <Collapse isOpen={this.state.expanded}>
                        <CardTitle tag="h5">Start Date</CardTitle>
                        <CardText>9 May, 2021 at 13:30</CardText>
                        <CardTitle tag="h5">End Date</CardTitle>
                        <CardText>9 May, 2021 at 13:36</CardText>
                        <CardTitle tag="h5">Performance Rating</CardTitle>
                        <CardText>Good Performance</CardText>
                        <CardTitle tag="h5">Customer Feedback</CardTitle>
                        <CardText><em className="ion ion-ios-thumbs-down text-danger"></em> Negative</CardText>
                      </Collapse>
                    </Col>
                    <Col md="3" lg="2" className="col-sm-3 mt-md-0 mt-3">
                      <CardTitle tag="h5">Analysis</CardTitle>
                      <CardText className="text-success">Positive</CardText>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Button className="conv-expand-button shadow-none" onClick={this.toggleDetails}>
                    {!this.state.expanded && <em className="ion ion-ios-arrow-down"></em>}
                    {this.state.expanded && <em className="ion ion-ios-arrow-up"></em>}
                  </Button>
                </CardFooter>
                <CardFooter className="conv-actions text-md-right text-center">
                  <Button className="px-button pink shadow-none">Report</Button>
                  <Link to="/conversations/history/1">
                    <Button className="px-button pink shadow-none">View Conversation</Button>
                  </Link>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <h6 className="uc-page-title mb-3">Older</h6>
              <Card className="conv-card mb-3">
                <div className="conv-status-decoration">&nbsp;</div>
                <CardBody>
                  <Row>
                    <Col md="9" lg="10">
                      <CardTitle tag="h5" className="conv-title">Case #443 with Callum T.</CardTitle>
                      <CardText className="conv-summary">Resolved in 5 minutes 36 seconds.</CardText>
                      <CardTitle tag="h5">Assisted Customer</CardTitle>
                      <CardText>Callum Tuna</CardText>
                      <Collapse isOpen={this.state.expanded}>
                        <CardTitle tag="h5">Start Date</CardTitle>
                        <CardText>9 May, 2021 at 13:30</CardText>
                        <CardTitle tag="h5">End Date</CardTitle>
                        <CardText>9 May, 2021 at 13:36</CardText>
                        <CardTitle tag="h5">Performance Rating</CardTitle>
                        <CardText>Great Performance</CardText>
                        <CardTitle tag="h5">Customer Feedback</CardTitle>
                        <CardText><em className="ion ion-ios-thumbs-up text-success"></em> Positive</CardText>
                      </Collapse>
                    </Col>
                    <Col md="3" lg="2" className="col-sm-3">
                      <CardTitle tag="h5">Analysis</CardTitle>
                      <CardText className="text-success">Positive</CardText>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Button className="conv-expand-button shadow-none" onClick={this.toggleDetails}>
                    {!this.state.expanded && <em className="ion ion-ios-arrow-down"></em>}
                    {this.state.expanded && <em className="ion ion-ios-arrow-up"></em>}
                  </Button>
                </CardFooter>
                <CardFooter className="conv-actions text-md-right text-center">
                  <Button className="px-button pink shadow-none">Report</Button>
                  <Link to="/conversations/history/1">
                    <Button className="px-button pink shadow-none">View Conversation</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="conv-card">
                <div className="conv-status-decoration">&nbsp;</div>
                <CardBody>
                  <Row>
                    <Col md="9" lg="10">
                      <CardTitle tag="h5" className="conv-title">Case #443 with Callum T.</CardTitle>
                      <CardText className="conv-summary">Resolved in 5 minutes 36 seconds.</CardText>
                      <CardTitle tag="h5">Assisted Customer</CardTitle>
                      <CardText>Callum Tuna</CardText>
                      <Collapse isOpen={this.state.expanded}>
                        <CardTitle tag="h5">Start Date</CardTitle>
                        <CardText>9 May, 2021 at 13:30</CardText>
                        <CardTitle tag="h5">End Date</CardTitle>
                        <CardText>9 May, 2021 at 13:36</CardText>
                        <CardTitle tag="h5">Performance Rating</CardTitle>
                        <CardText>Low Performance</CardText>
                        <CardTitle tag="h5">Customer Feedback</CardTitle>
                        <CardText><em className="ion ion-ios-thumbs-down text-danger"></em> Negative</CardText>
                      </Collapse>
                    </Col>
                    <Col md="3" lg="2" className="col-sm-3">
                      <CardTitle tag="h5">Analysis</CardTitle>
                      <CardText className="text-danger">Negative</CardText>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Button className="conv-expand-button shadow-none" onClick={this.toggleDetails}>
                    {!this.state.expanded && <em className="ion ion-ios-arrow-down"></em>}
                    {this.state.expanded && <em className="ion ion-ios-arrow-up"></em>}
                  </Button>
                </CardFooter>
                <CardFooter className="conv-actions text-md-right text-center">
                  <Button className="px-button pink shadow-none">Report</Button>
                  <Link to="/conversations/history/1">
                    <Button className="px-button pink shadow-none">View Conversation</Button>
                  </Link>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}