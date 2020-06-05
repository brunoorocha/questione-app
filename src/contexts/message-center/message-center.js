import React, {
  useContext,
  createContext,
  useReducer,
  useEffect,
  useState,
} from 'react';
import { messageCenterContexReducer, actionTypes } from './reducer';
const MessageCenter = createContext();

export const MessageCenterProvider = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [isShowingMessage, setIsShowingMessage] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [message, setMessage] = useState(undefined);

  const initialState = {
    messages: [],
  };

  // eslint-disable-next-line prettier/prettier
  const [state, dispatch] = useReducer(messageCenterContexReducer, initialState);

  useEffect(() => {
    const currentMessage = state.messages[index];
    const isBeenShowed = currentMessage === message;
    if (!currentMessage || !isRunning || isBeenShowed) {
      return;
    }

    const showMessage = () => {
      setIsShowingMessage(true);
      setMessage(currentMessage);

      setTimeout(() => {
        setIsShowingMessage(false);
        setMessage(undefined);
      }, currentMessage.duration);
    };

    setTimeout(showMessage, 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, index, isRunning]);

  useEffect(() => {
    if (!isShowingMessage && isRunning) {
      setIndex(index + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShowingMessage]);

  const dispatchMessage = ({ text, duration = 3000 }) => {
    const newMessage = { text, duration };
    dispatch({
      type: actionTypes.DISPATCH_MESSAGE,
      payload: { message: newMessage },
    });
    setIsRunning(true);
  };

  return (
    <MessageCenter.Provider
      value={{ isShowingMessage, message, dispatchMessage }}>
      {children}
    </MessageCenter.Provider>
  );
};

export const useMessageCenterContext = () => {
  const context = useContext(MessageCenter);
  if (!context) {
    // eslint-disable-next-line prettier/prettier
    throw new Error('useMessageCenterContext must be used iside MessageCenterProvider');
  }

  return context;
};
