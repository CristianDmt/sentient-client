import { useEffect, useState, useRef, useContext } from 'react';
import ConversationCustomerComponent from "../../components/conversations/ConversationCustomer";
import { RelayClientMessage } from '../../data/entities/RelayClientMessage';
import useSound from 'use-sound';
import { SocketContext } from '../../context/SocketContext';

const notification = require("../../resources/assets/audio/notification.mp3");

interface Props { }

const ConversationCustomer = (props: Props) => {
  const socketContext = useContext(SocketContext);
  const [playNotification] = useSound(notification, { volume: 1 });

  const [message, setMessage] = useState<string>('');
  const [lastMessage, setForceUpdate] = useState(Date.now());

  const messagesRef = useRef<RelayClientMessage[]>([]);

  useEffect(() => {
    if (socketContext.socket) {
      socketContext.socket.on('relay message', (data: RelayClientMessage) => { 
        playNotification();
        onReceiveMessage(data);
      });
    }

    return () => {
      socketContext.socket?.disconnect();
    }
  }, [socketContext.socket]);

  const onSendMessage = () => {
    if (message) {
      socketContext.socket.emit('relay message', message);

      messagesRef.current.push({
        user: false,
        message: message
      });

      setForceUpdate(Date.now());
      setMessage('');
    }
  }

  const onReceiveMessage = (message: RelayClientMessage) => {
    playNotification();
    
    messagesRef.current.push({
      user: message.user,
      message: message.message
    });

    setForceUpdate(Date.now());
  }

  return <ConversationCustomerComponent 
    message={message}
    messages={messagesRef.current}
    onMessage={setMessage}
    onSendMessage={onSendMessage}
    lastMessage={lastMessage}
  />
}

export default ConversationCustomer;