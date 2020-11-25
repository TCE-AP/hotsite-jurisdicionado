import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';
import ToastContainer from '../components/General/ToastContainer';

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
  show: boolean;
}

export interface ToastMessage {
  id: string;
  title: string;
  type?: 'success' | 'error' | 'info';
  description?: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);
  const [show, setShow] = useState(false);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages((oldMessages) => [...oldMessages, toast]);
      setShow(true);
    },
    [],
  );
  const removeToast = useCallback((id: string) => {
    setShow(false);
    setTimeout(
      () =>
        setMessages((state) => state.filter((message) => message.id !== id)),
      300,
    );
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast, show }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
