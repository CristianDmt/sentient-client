import React, {Component, useEffect, useContext} from 'react';
import ConversationActiveComponent from "../../components/conversations/ConversationActive";
import {UserContext} from "../../context/UserContext";

interface Props {}

const ConversationActive = (props: Props) => {
    const userContext = useContext(UserContext);

    useEffect(() => {
        if (userContext.userData) {

        }
    }, []);

    return <ConversationActiveComponent/>
}

export default ConversationActive;