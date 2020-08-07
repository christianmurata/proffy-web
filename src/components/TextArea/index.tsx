import React from 'react';

// CSS
import './styles.css';

interface TextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...attr }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...attr} />
    </div>
  );
}

export default Textarea;