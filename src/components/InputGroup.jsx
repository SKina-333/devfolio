import React from "react";

export default function InputGroup({
  name,
  type,
  labelName,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="rounded-md bg-gray-100 px-3 pb-1.5 pt-2.5  focus-within:outline-white-600">
      <label htmlFor={name} className="block mb-3 text-xs text-gray-800 font-bold">
        {labelName}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="resize-none h-20 block w-full bg-whites text-black bg-gray-100 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="block w-full bg-whites text-black bg-gray-100 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
        />
      )}
    </div>
  );
}
