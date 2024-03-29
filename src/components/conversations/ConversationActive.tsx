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
import useSound from 'use-sound';

const notification = require("../../resources/assets/audio/notification.mp3");

interface Props {
  onMessage: Function;
  onSendMessage: Function;
  message: string;
  messages: RelayClientMessage[];
  lastMessage: number;
}

const ConversationActiveComponent = (props: Props) => {
  const [playNotification] = useSound(notification, { volume: 1 });

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    playNotification();
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
      <Container fluid className="lock-height-100">
        <h3 className="py-3 mb-3">Conversation</h3>
        <Row>
          <Col lg="8">
            <h6 className="uc-page-title mb-3">Ongoing Conversation</h6>
            <Card className="conv-card" style={{ maxHeight: 440 }}>
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
                          <Row className="conv-bubble external blue" key={i}>
                            <Col className="col-10 align-self-center">
                              <span>{_.message}</span>
                            </Col>
                            <Col className="col-2 conv-bubble-rating">
                              <em className="ion ion-ios-thumbs-up"></em>
                            </Col>
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
                    <Link to="/conversations">
                      <Button className="px-button pink shadow-none">Leave <em className="ion ion-md-exit ion-lg"></em></Button>
                    </Link>
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
                <CardTitle tag="h5">Duration</CardTitle>
                <CardText>3 minutes 25 seconds</CardText>
                <CardTitle tag="h5">Analysis</CardTitle>
                <CardText className="text-success">Positive</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ConversationActiveComponent;