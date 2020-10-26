import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';

interface Props extends InputProps {
  name: string;
}

const Input: React.FC<Props> = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <ReactInputMask
      ref={inputRef}
      defaultValue={defaultValue}
      className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
      {...rest}
    />
  );
};

export default Input;
