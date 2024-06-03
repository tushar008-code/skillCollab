import { CiSearch } from "react-icons/ci";
import useSearch from "./useSearch";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { IoSearchSharp } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";

function SearchBox() {
  const {
    setSearchTerm,
    recentSearches,
    addRecentSearch,
    removeRecentSearch,
    searchForm,
    setSearchForm,
  } = useSearch();
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setSearchTerm(inputValue);
      addRecentSearch(inputValue);
      setSearchForm(false);
    }
  }

  useEffect(() => {
    // Focus on the input field when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (newValue.trim() === "") {
      setSearchTerm("");
    }
  }

  function handleRecentSearchClick(term: string) {
    setSearchTerm(term);
    setInputValue(term);
  }

  function handleClickOutside(e: MouseEvent) {
    if (
      !inputRef.current.contains(e.target as Node) &&
      !e.target.closest(".search-form")
    ) {
      setSearchForm(false);
    }
  }

  useEffect(() => {
    // Add event listener to handle click outside the search form
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="global-search">
      <form onSubmit={handleSearch} className="mobile:hidden">
        <div className="default relative">
          <input
            type="text"
            className="h-[38px] rounded-lg py-2 px-3 text-xs w-[260px] border-2 border-solid border-gray-300"
            placeholder="Search..."
            value={inputValue}
            onChange={handleChange}
            onFocus={() => setSearchForm(true)}
          />
          <button
            type="submit"
            className="absolute right-[10px] top-[50%] translate-y-[-50%]"
          >
            <CiSearch size={24} color="gray" />
          </button>
        </div>
      </form>

      {searchForm && (
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
              <IoArrowBackOutline size={20} />
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
                <span
                  className="ml-auto"
                  onClick={() => removeRecentSearch(term)}
                >
                  <X size={20} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBox;
