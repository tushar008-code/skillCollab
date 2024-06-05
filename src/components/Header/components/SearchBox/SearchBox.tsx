import { CiSearch } from "react-icons/ci";

import useInputFocus from "./useInputFocus";
import useClickOutside from "./useClickOuside";
import useSearchForm from "./useSearchForm";
import SearchModal from "./component/SearchModal";

function SearchBox() {
  const {
    handleSearch,
    handleChange,
    searchForm,
    setSearchForm,
    searchParams,
  } = useSearchForm();

  const inputRef = useInputFocus();
  useClickOutside(inputRef, () => setSearchForm(false));

  return (
    <div className="global-search">
      <form onSubmit={handleSearch} className="mobile:hidden">
        <div className="default relative">
          <input
            type="text"
            className="h-[38px] rounded-lg py-2 px-3 text-xs w-[260px] border-2 border-solid border-gray-300"
            placeholder="Search..."
            value={searchParams.get("searchTerm") ?? ""}
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

      {searchForm && <SearchModal />}
    </div>
  );
}

export default SearchBox;
