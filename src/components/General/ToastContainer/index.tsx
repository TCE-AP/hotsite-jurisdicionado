import React from 'react';

import { ToastMessage } from '../../../hooks/toast';
import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <div
      className="fixed inset-0 flex justify-center px-4 py-6 
    pointer-events-none sm:p-6 sm:items-start sm:justify-end"
    >
      {messages.map((item) => (
        <Toast key={item.id} toast={item} />
      ))}
    </div>
  );
};

export default ToastContainer;
