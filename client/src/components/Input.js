import React from "react";

const Input = ({label, value, type, placeholder, handleChange, name, validationText, half}) => {
  return (
    <div className="mt-4">
      <div>
        <label className="text-sm text-gray-700">
          {label}
        </label>
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          className={`${half ? 'w-1/2' : 'w-full'} px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600`}
          onChange={handleChange}
          required
        />
        <span className="text-xs tracking-wide text-red-600">
          {validationText}
        </span>
      </div>
    </div>
  );
};

export default Input;
