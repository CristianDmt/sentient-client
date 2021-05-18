import {useEffect, useContext} from 'react';
import ConversationsComponent from "../../components/conversations/Conversations";
import {UserContext} from "../../context/UserContext";

interface Props {}

const Conversations = (props: Props) => {
    const userContext = useContext(UserContext);

    useEffect(() => {
        if (userContext.userData) {

        }
    }, []);

    return <ConversationsComponent/>
}

export default Conversations;