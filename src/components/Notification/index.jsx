import React, { useState } from 'react';
import { EventEmitter } from 'fbemitter';

export const emitter = new EventEmitter();

const Notification = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');

  const resetNotification = () => {
    setTimeout(() => setOpen(false), 5000);
  };

  const emitterOnAddListner = (eventName, notificationType) => {
    return emitter.addListener(eventName, (msg) => {
      setOpen(true);
      setMessage(msg);
      setType(notificationType);
      resetNotification();
    });
  };

  emitterOnAddListner('SUCCESS_NOTIFICATION', 'success');
  emitterOnAddListner('INFO_NOTIFICATION', 'info');
  emitterOnAddListner('WARNING_NOTIFICATION', 'warning');
  emitterOnAddListner('DANGER_NOTIFICATION', 'danger');

  if (!open) {
    return null;
  } else {
    return <div className={`notification ${type}`}>{message}</div>;
  }
};

export default Notification;
