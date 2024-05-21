import React from "react";

const Input = ({
  labelName,
  placeholder,
  className,
  onChange,
}) => {
  return (
    <div className="mb-4 grid grid-cols-1">
      <div>
        <label className="text-xl font-sometype font-bold">
          {labelName}
        </label>
      </div>
      <div>
        <input
          type="text"
          placeholder={placeholder}
          className={className}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
fsdf;
