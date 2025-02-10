const ButtonPrimary = ({ title }) => {
  return (
    <button className="bg-blue-600 p-2 w-full rounded-sm my-2 text-white font-semibold hover:font-bold hover:bg-blue-700 uppercase">
      {title}
    </button>
  );
};

export default ButtonPrimary;
