import React from 'react';
import { Snackbar } from '../snackbar/Snackbar';
import { useMessageCenterContext } from '../../contexts/message-center';

export const MessageCenter = () => {
  const { isShowingMessage, message } = useMessageCenterContext();
  return <Snackbar text={message?.text} isVisible={isShowingMessage} />;
};
