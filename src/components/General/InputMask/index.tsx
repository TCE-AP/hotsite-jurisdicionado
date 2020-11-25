import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';

interface Props extends InputProps {
  name: string;
}

const InputMask: React.FC<Props> = ({ name, disabled, ...rest }) => {
  const inputRef = useRef(null);
  const {
    fieldName,
    defaultValue,
    registerField,
    error,
    clearError,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <div className="mt-1 relative rounded-md shadow-sm">
        <ReactInputMask
          ref={inputRef}
          defaultValue={defaultValue}
          onFocus={clearError}
          disabled={disabled}
          className={`
          ${disabled ? 'bg-gray-100 dark:bg-black-apoio' : ''}
          ${
            error
              ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red'
              : 'focus:ring-blue-500 dark:focus:ring-yellow-primary focus:border-blue-500 dark:focus:border-yellow-primary border-gray-300 dark:border-black-apoio'
          } block w-full shadow-sm py-3 px-4 placeholder-gray-500 rounded-md dark:bg-gray-800 dark:text-gray-400`}
          {...rest}
        />
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default InputMask;
