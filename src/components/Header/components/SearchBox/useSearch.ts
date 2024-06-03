import { create } from "zustand";

interface SearchState {
  searchTerm: string;
  recentSearches: string[];
  searchForm: boolean;
  setSearchTerm: (term: string) => void;
  addRecentSearch: (term: string) => void;
  removeRecentSearch: (term: string) => void;
  clearRecentSearches: () => void;
  setSearchForm: (type: boolean) => void;
}

const useSearch = create<SearchState>((set) => ({
  searchTerm: "",
  recentSearches: JSON.parse(localStorage.getItem("recentSearches") || "[]"),
  searchForm: false,
  setSearchTerm: (term) => set({ searchTerm: term }),
  setSearchForm: (type) => set({ searchForm: type }),
  addRecentSearch: (term) =>
    set((state) => {
      const updatedSearches = [
        term,
        ...state.recentSearches.filter((t) => t !== term),
      ].slice(0, 8);
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
      return { recentSearches: updatedSearches };
    }),
  removeRecentSearch: (term) =>
    set((state) => {
      const updatedSearches = state.recentSearches.filter((t) => t !== term);
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
      return { recentSearches: updatedSearches };
    }),
  clearRecentSearches: () => {
    localStorage.removeItem("recentSearches");
    return { recentSearches: [] };
  },
}));

export default useSearch;
