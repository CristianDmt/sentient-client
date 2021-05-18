import React, { ChangeEvent, KeyboardEvent, useState, useRef, useEffect, useContext } from 'react';
import update from 'immutability-helper';

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

interface Props {
}

const ConversationActiveComponent = (props: Props) => {
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    
    const [messages, setMessages] = useState<object[]>([
        {
            user: "Callum T.",
            message: "Hello I need help!"
        },
        {
            user: false,
            message: "Hello how may I help you?"
        },
        {
            user: "Callum T.",
            message: "I can't login to my account"
        },
        {
            user: false,
            message: "Hello how may I help you?"
        },
        {
            user: "Callum T.",
            message: "I can't login to my account"
        }
    ]);

    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const onSendMessage = () => {
        if (message) {
            const newMessages = update(messages, {
                $push: [{
                    user: false,
                    message: message
                }]
            });

            setMessages(newMessages);
            setMessage('');
        }
    }

    const onMessageType = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    const onMessageKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSendMessage();
        }
    }

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <>
            <Container fluid className="lock-height-100">
                <h3 className="py-3 mb-3">Conversation</h3>
                <Row>
                    <Col lg="8">
                        <h6 className="uc-page-title mb-3">Ongoing Conversation</h6>
                        <Card className="conv-card" style={{maxHeight: 440}}>
                            <CardBody className="overflow-auto">
                                {
                                    messages.map((message: any) => {
                                        if (!message.user) {
                                            return (
                                                <>
                                                    <Row className="conv-bubble self">
                                                        <span>{message.message}</span>
                                                    </Row>
                                                </>
                                            )
                                        } else {
                                            return (
                                                <>
                                                    <CardTitle className="uc-page-title mb-1">{message.user}</CardTitle>
                                                    <Row className="conv-bubble external blue">
                                                        <Col className="col-10 align-self-center">
                                                            <span>{message.message}</span>
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
                                <div ref={messagesEndRef}/>
                            </CardBody>
                            <CardFooter className="conv-actions text-md-right text-center">
                                <Row>
                                    <Col md="12">
                                        <Input
                                            className="px-input w-100 shadow-none"
                                            type="text"
                                            value={message}
                                            onChange={(e) => onMessageType(e)}
                                            onKeyUp={(e) => onMessageKeyPress(e)}
                                        />
                                    </Col>
                                    <Col md="12" className="mt-md-3 mt-3">
                                        <Button
                                            className="px-button pink shadow-none"
                                            onClick={() => onSendMessage()}
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
                        <Card className="conv-card" style={{maxHeight: 440}}>
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