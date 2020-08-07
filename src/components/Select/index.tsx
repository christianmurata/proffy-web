import React from 'react';

// CSS
import './styles.css';

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: {
    value: string;
    label: string;
  }[];
}

const Input: React.FC<SelectProps> = ({ label, name, options, ...attr }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select defaultValue="" id={name} {...attr}>
        <option value="" disabled hidden>Selecione uma opção</option>

        { options.map((option) => {
          return <option key={option.value} value={option.value}>{option.label}</option>
        }) }
      </select>
    </div>
  );
}

export default Input;