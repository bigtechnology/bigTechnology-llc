import React, { useState } from 'react';
import { RegisterOptions, UseFormMethods } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Input = ({
  id,
  label,
  name,
  register,
  type = 'text',
  rules = {},
  errors = {},
  showPassword,
  placeHolder = '',
  ...rest
}: InputProps): React.ReactElement => {
  // Store the type prop in state so it can change to show/hide the value for passwords
  const [inputType, setInputType] = useState(type);

  /**
   * Functionality to toggle the show/hide password
   */
  const toggleHiddenPassword = (event: React.MouseEvent) => {
    event.preventDefault();
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className="input-field">
        <input
          id={id}
          name={name}
          type={inputType}
          ref={register && register(rules)}
          autoComplete="off"
          autoCapitalize="off"
          placeholder={placeHolder}
          {...rest}
        />
        {showPassword ? (
          <button
            type="button"
            className="show-hide-btn"
            tabIndex={-1} // Prevent button from being selected if user presses tab
            onClick={toggleHiddenPassword}
          >
            {inputType === 'password' ? (
              <AiOutlineEye />
            ) : (
              <AiOutlineEyeInvisible />
            )}
          </button>
        ) : null}
      </div>
      <div className="message">
        <span className="red">*</span>{' '}
        {errors[name] ? errors[name].message : ''}
      </div>
    </div>
  );
};

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  id: string;
  name: string;
  label: string;
  register?: UseFormMethods['register'];
  type?: string;
  rules?: RegisterOptions;
  errors?: UseFormMethods['errors'];
  showPassword?: boolean;
  placeHolder?: string;
}

export default Input;
