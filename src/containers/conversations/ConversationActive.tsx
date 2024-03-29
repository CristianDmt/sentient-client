import { useEffect, useContext, useRef, useState } from 'react';
import ConversationActiveComponent from "../../components/conversations/ConversationActive";
import { SocketContext } from '../../context/SocketContext';
import { UserContext } from "../../context/UserContext";
import { RelayClientMessage } from '../../data/entities/RelayClientMessage';

interface Props { }

const ConversationActive = (props: Props) => {
  const userContext = useContext(UserContext);
  const socketContext = useContext(SocketContext);

  const [message, setMessage] = useState<string>('');
  const [lastMessage, setLastMessage] = useState(Date.now());

  const messagesRef = useRef<RelayClientMessage[]>([]);

  useEffect(() => {
    socketContext.switchFocus(true);

    return () => {
      socketContext.switchFocus(false);
    }
  }, []);

  useEffect(() => {
    if (socketContext.socket) {
      socketContext.socket.on('relay message', (data: RelayClientMessage) => { 
        onReceiveMessage(data);
      });
    }
  }, [socketContext.socket]);

  const onSendMessage = () => {
    if (message) {
      socketContext.socket.emit('relay message', message);

      messagesRef.current.push({
        user: false,
        message: message
      });

      setLastMessage(Date.now());
      setMessage('');
    }
  }

  const onReceiveMessage = (message: RelayClientMessage) => {
    messagesRef.current.push({
      user: message.user,
      message: message.message
    });

    setLastMessage(Date.now());
  }

  useEffect(() => {
    if (userContext.userData) {

    }
  }, []);

  return <ConversationActiveComponent
    message={message}
    messages={messagesRef.current}
    onMessage={setMessage}
    onSendMessage={onSendMessage}
    lastMessage={lastMessage}
  />
}

export default ConversationActive;