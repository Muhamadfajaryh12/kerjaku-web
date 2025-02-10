import { BsSearch } from "react-icons/bs";

const Searchbar = ({ style }) => {
  return (
    <div
      className={`rounded-md bg-gray-200 flex gap-2 p-2 items-center ${style}`}
    >
      <BsSearch size={15} />
      <input
        type="text"
        className="w-full focus:outline-0"
        placeholder="Mencari pekerjaan"
      />
    </div>
  );
};

export default Searchbar;
