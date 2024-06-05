import { ChangeEvent, FormEvent, useState } from "react";
import useSearch from "./useSearch";
import { useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setSearchTerm(inputValue);
      addRecentSearch(inputValue);
      setSearchForm(false);
    }

    if (location.pathname === "/home/profile") {
      navigate(`/home?feed=all&searchTerm=${encodeURIComponent(inputValue)}`);
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
