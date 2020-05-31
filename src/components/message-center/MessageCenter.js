import React, { useState, useEffect } from 'react';
import { Snackbar } from '../snackbar/Snackbar';

export const useMessageCenter = () => {
  const messageDuration = 3000;
  const [shouldShowMessage, setShouldShowMessage] = useState(false);
  const [message, setMessage] = useState(undefined);

  useEffect(() => {
    setShouldShowMessage(true);

    const hideMessageTimeOut = setTimeout(() => {
      setShouldShowMessage(false);
    }, messageDuration);

    return () => {
      clearTimeout(hideMessageTimeOut);
    };
  }, [message]);

  const showMessage = ({ text }) => {
    if (text === undefined) {
      return;
    }

    const newMessage = { text };
    setMessage(newMessage);
  };

  const MessageCenter = () => (
    <Snackbar text={message?.text} isVisible={shouldShowMessage} />
  );

  return { MessageCenter, showMessage };
};
