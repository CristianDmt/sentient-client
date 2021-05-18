import React, {Component, useEffect, useContext} from 'react';
import ConversationHistoryComponent from "../../components/conversations/ConversationHistory";
import {UserContext} from "../../context/UserContext";

interface Props {}

const ConversationHistory = (props: Props) => {
    const userContext = useContext(UserContext);

    useEffect(() => {
        if (userContext.userData) {

        }
    }, []);

    return <ConversationHistoryComponent/>
}

export default ConversationHistory;