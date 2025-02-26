// InputField.js
import React from 'react';

const InputField = ({ label, type, name, placeholder, value, onChange, onBlur, error }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-primary mb-2">{label}:</label>
      <input
        type={type}
        id={name}
        name={name}
        className={`w-full p-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default InputField;
