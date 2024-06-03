import { create } from "zustand";

// Define the state interface
interface FilterState {
  time: string;
  feed: string;
  setFeed: (feed: string) => void;
  setTime: (time: string) => void;
}

// Create the Zustand store with type safety
const useFeedFilter = create<FilterState>((set) => ({
  time: "allTime",
  feed: "New",
  setFeed: (feed) => set(() => ({ feed })),
  setTime: (time) => set(() => ({ time })),
}));

export default useFeedFilter;
