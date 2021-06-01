import { ChangeEvent, KeyboardEvent, useRef, useEffect } from 'react';

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
import { Link } from "react-router-dom";
import { RelayClientMessage } from '../../data/entities/RelayClientMessage';

import useWindowDimensions from '../../hooks/useWindowDimentions';

interface Props {
  onMessage: Function;
  onSendMessage: Function;
  message: string;
  messages: RelayClientMessage[];
  lastMessage: number;
}

const ConversationCustomerComponent = (props: Props) => {
  const { height } = useWindowDimensions();

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const conversationBox = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (conversationBox.current) {
      conversationBox.current.style.maxHeight = `${height-155}px`;
    }
  }, [height]);

  useEffect(() => {
    scrollToBottom();
  }, [props.lastMessage]);

  const onMessageType = (e: ChangeEvent<HTMLInputElement>) => {
    props.onMessage(e.target.value);
  }

  const onMessageKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.onSendMessage();
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Container fluid className="p-4">
        <h3 className="py-3 mb-3">Customer Support</h3>
        <Row>
          <Col lg="8">
            <h6 className="uc-page-title mb-3">Conversation</h6>
            <Card className="conv-card h-100" innerRef={conversationBox}>
              <CardBody className="overflow-auto">
                {
                  props.messages.map((_: RelayClientMessage, i: number) => {
                    if (!_.user) {
                      return (
                        <>
                          <Row className="conv-bubble self" key={i}>
                            <span>{_.message}</span>
                          </Row>
                        </>
                      )
                    } else {
                      return (
                        <>
                          <CardTitle className="uc-page-title mb-1">{_.user}</CardTitle>
                          <Row className="conv-bubble client external blue" key={i}>
                            <span>{_.message}</span>
                          </Row>
                        </>
                      )
                    }
                  })
                }
                <div ref={messagesEndRef} />
              </CardBody>
              <CardFooter className="conv-actions text-md-right text-center">
                <Row>
                  <Col md="12">
                    <Input
                      className="px-input w-100 shadow-none"
                      type="text"
                      value={props.message}
                      onChange={(e) => onMessageType(e)}
                      onKeyUp={(e) => onMessageKeyPress(e)}
                    />
                  </Col>
                  <Col md="12" className="mt-md-3 mt-3">
                    <Button
                      className="px-button pink shadow-none"
                      onClick={() => props.onSendMessage()}
                    >Send</Button>
                    <Link to="/conversation">
                      <Button className="px-button pink shadow-none">Leave <em className="ion ion-md-exit ion-lg"></em></Button>
                    </Link>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
          <Col>
            <h6 className="uc-page-title mb-3 mt-lg-0 mt-3">Case Details</h6>
            <Card className="conv-card" style={{ maxHeight: 440 }}>
              <CardBody className="overflow-auto">
                <CardTitle tag="h5">Case ID</CardTitle>
                <CardText>#443</CardText>
                <CardTitle tag="h5">Company</CardTitle>
                <CardText>Ubisoft</CardText>
                <CardTitle tag="h5">Department</CardTitle>
                <CardText>Payment Issues</CardText>
                <CardTitle tag="h5">Assisting Agent</CardTitle>
                <CardText>Callum Tuna</CardText>
                <CardTitle tag="h5">Duration</CardTitle>
                <CardText>3 minutes 25 seconds</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ConversationCustomerComponent;