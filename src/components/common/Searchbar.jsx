import { BsSearch } from "react-icons/bs";

const Searchbar = ({ style }) => {
  return (
    <div className={`rounded-sm  border flex gap-2 p-1 items-center ${style}`}>
      <BsSearch size={20} />
      <input
        type="text"
        className="w-full focus:outline-0"
        placeholder="Mencari pekerjaan"
      />
    </div>
  );
};

export default Searchbar;
