const TextInput = ({ title, props }) => {
  return (
    <div className="my-2">
      <label htmlFor="" className="block text-sm opacity-90">
        {title}
      </label>
      <input
        {...props}
        className="border border-gray-400 w-full p-1 rounded-sm "
      />
    </div>
  );
};

export default TextInput;
