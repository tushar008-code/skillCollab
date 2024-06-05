import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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

  const [inputValue, setInputValue] = useState("hello");
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize the input value from the URL
  useEffect(() => {
    const searchTerm = searchParams.get("searchTerm") || "";
    setInputValue(searchTerm);
    setSearchTerm(searchTerm);
  }, []);

  // Update Zustand state based on URL change (e.g., when the user hits Enter)
  useEffect(() => {
    const handlePopState = () => {
      const searchTerm = searchParams.get("searchTerm") || "";
      setSearchTerm(searchTerm);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [searchParams, setSearchTerm]);

  // Handle form submission
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setSearchTerm(inputValue);
      addRecentSearch(inputValue);
      setSearchForm(false);
      searchParams.set("searchTerm", inputValue);
      setSearchParams(searchParams);
    }

    if (location.pathname === "/home/profile") {
      navigate(`/home?feed=all&searchTerm=${encodeURIComponent(inputValue)}`);
    }
  };

  // Handle input change and update the URL on each keystroke
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (newValue.trim() === "") {
      searchParams.delete("searchTerm");
      setSearchTerm(newValue);
    } else {
      searchParams.set("searchTerm", newValue);
    }
    setSearchParams(searchParams);
  };

  // Handle recent search click
  const handleRecentSearchClick = (term: string) => {
    setSearchTerm(term);
    setInputValue(term);
    searchParams.set("searchTerm", term);
    setSearchParams(searchParams);
    if (location.pathname === "/home/profile") {
      navigate(`/home?feed=all&searchTerm=${encodeURIComponent(term)}`);
    }
  };

  return {
    inputValue,
    setInputValue,
    handleSearch,
    handleChange,
    handleRecentSearchClick,
    recentSearches,
    addRecentSearch,
    removeRecentSearch,
    searchForm,
    setSearchForm,
    searchParams,
  };
};

export default useSearchForm;
