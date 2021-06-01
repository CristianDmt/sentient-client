import React, { useState, useEffect, useContext, useRef, useCallback } from "react";
import { useLocation } from "react-router";
import { RelayClientMessage } from "../data/entities/RelayClientMessage";
import { ToastContext } from "./ToastContext";
import { UserContext } from "./UserContext";

const io = require('socket.io-client');

interface SocketContextData {
  socket: typeof io | null;
  connect: () => void;
  disconnect: () => void;
  switchFocus: (focus: boolean) => void;
}

interface Props {
  children: JSX.Element
}

export const SocketContext = React.createContext<SocketContextData>({
  socket: null,
  connect: () => {},
  disconnect: () => {},
  switchFocus: () => {}
});

const SocketProvider = (props: Props) => {
  const location = useLocation();
  const socket = useRef<typeof io>(null);

  const toastContext = useContext(ToastContext);

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onMessageWithoutFocus = useCallback((data: RelayClientMessage) => {
    toastContext.toast(`${data.user}: ${data.message}`);
  }, [toastContext]);

  useEffect(() => {
    socket.current = io('http://localhost:3001/relay', { 
      autoConnect: false,
      query: { token: 'abc' } 
    });

    return () => {
      if (socket) {
        socket.current.disconnect();
      }
    }
  }, []);

  useEffect(() => {
    if (isFocused) {
      socket.current.off('relay message', onMessageWithoutFocus);
    } else {
      socket.current.on('relay message', onMessageWithoutFocus);
    }
  }, [isFocused]);

  useEffect(() => {
    if (location.pathname !== '/') {
      
    }
  }, [location]);

  const connect = () => {
    socket.current.connect();
  }

  const disconnect = () => {
    socket.current.disconnect();
  }

  return (
    <SocketContext.Provider value={{
      socket: socket.current,
      connect: connect,
      disconnect: disconnect,
      switchFocus: setIsFocused
    }}>
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;