import useSearchForm from "../useSearchForm";
import { IoArrowBackOutline, IoSearchSharp } from "react-icons/io5";
import useInputFocus from "../useInputFocus";
import useClickOutside from "../useClickOuside";
import { CiSearch } from "react-icons/ci";
import { X } from "lucide-react";

function SearchModal() {
  const {
    inputValue,
    handleSearch,
    handleChange,
    handleRecentSearchClick,
    recentSearches,
    removeRecentSearch,
    setSearchForm,
  } = useSearchForm();

  const inputRef = useInputFocus();
  useClickOutside(inputRef, () => setSearchForm(false));

  return (
    <div className="search-form absolute top-3 max-h-[300px] h-full z-10 bg-white p-3 shadow-lg mobile:w-full mobile:max-h-screen mobile:h-screen">
      <form
        action=""
        className="relative mobile:flex mobile:items-center mobile:gap-3 "
        onSubmit={handleSearch}
      >
        <div
          className="back hidden mobile:block"
          onClick={() => setSearchForm(false)}
        >
          <IoArrowBackOutline size={20} cursor={"pointer"} />
        </div>
        <input
          type="text"
          className="h-[38px] rounded-lg py-2 px-3 text-xs w-[300px] mobile:w-full border-2 border-solid border-gray-300"
          placeholder="Search..."
          value={inputValue}
          onChange={handleChange}
          ref={inputRef}
        />
        <button
          type="submit"
          className="absolute right-[10px] top-[50%] translate-y-[-50%]"
        >
          <CiSearch size={24} color="gray" />
        </button>
      </form>
      <ul className="recent-searches mt-2">
        {recentSearches.map((term, index) => (
          <li
            key={index}
            className="cursor-pointer py-1 flex items-center text-sm gap-3 hover:font-bold w-full"
          >
            <span onClick={() => handleRecentSearchClick(term)}>
              <IoSearchSharp />
            </span>
            <h6 onClick={() => handleRecentSearchClick(term)}>{term}</h6>
            <span className="ml-auto" onClick={() => removeRecentSearch(term)}>
              <X size={20} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchModal;
