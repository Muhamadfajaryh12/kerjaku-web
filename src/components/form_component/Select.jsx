import React from "react";

const Select = ({ data, value, label, title, name, placeholder, ...props }) => {
  return (
    <div className="my-2">
      <label
        htmlFor={name}
        className="block text-sm text-gray-800 font-semibold"
      >
        {title}
      </label>
      <select
        name={name}
        {...props}
        className="border border-gray-400 w-full p-1 rounded-sm "
      >
        <option value="">{placeholder}</option>
        {data.map((item) => (
          <option key={item[value]} value={item[value]}>
            {item[label]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
