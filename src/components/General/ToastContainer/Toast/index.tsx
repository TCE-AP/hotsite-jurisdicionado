import { Transition } from '@headlessui/react';
import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../../hooks/toast';

interface ToastProps {
  toast: ToastMessage;
}

const icons = {
  info: <FiInfo className="text-blue-400" size={24} />,
  error: <FiAlertCircle className="text-red-400" size={24} />,
  success: <FiCheckCircle className="text-green-400" size={24} />,
};

const Toast: React.FC<ToastProps> = ({ toast }) => {
  const { removeToast, show } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [toast.id, removeToast]);

  return (
    <Transition
      show={show}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto max-h-28 overflow-hidden"
    >
      <div className="">
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">{icons[toast.type || 'info']}</div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="text-sm leading-5 font-medium text-gray-900">
                {toast.title}
              </p>
              {toast.description && (
                <p className="mt-1 text-sm leading-5 text-gray-500">
                  {toast.description}
                </p>
              )}
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                type="button"
                onClick={() => removeToast(toast.id)}
                className="inline-flex focus:outline-none transition ease-in-out duration-150"
              >
                <FiXCircle
                  className="text-gray-400 focus:text-gray-500"
                  size={18}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Toast;
