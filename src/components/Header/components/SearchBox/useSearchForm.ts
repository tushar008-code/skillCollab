import { ChangeEvent, FormEvent, useState } from "react";
import useSearch from "./useSearch";

const useSearchForm = () => {
  const {
    setSearchTerm,
    recentSearches,
    addRecentSearch,
    removeRecentSearch,
    searchForm,
    setSearchForm,
  } = useSearch();

  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setSearchTerm(inputValue);
      addRecentSearch(inputValue);
      setSearchForm(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (newValue.trim() === "") {
      setSearchTerm("");
    }
  };

  const handleRecentSearchClick = (term: string) => {
    setSearchTerm(term);
    setInputValue(term);
  };

  return {
    inputValue,
    setInputValue,
    handleSearch,
    handleChange,
    handleRecentSearchClick,
    setSearchTerm,
    recentSearches,
    addRecentSearch,
    removeRecentSearch,
    searchForm,
    setSearchForm,
  };
};

export default useSearchForm;
