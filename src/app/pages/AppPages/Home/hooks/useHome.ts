/** @format */

import useFeedFilter from "@/app/layouts/AppLayout/components/FeedFilter/useFeedFilter";
import userClient from "@/app/services/userClient";
import useSearch from "@/components/Header/components/SearchBox/useSearch";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export function useHome() {
  const [searchParams] = useSearchParams();
  const currentFeed = searchParams.get("feed") || "all";
  const { time, feed } = useFeedFilter();
  const { searchTerm } = useSearch();
  console.log(currentFeed);

  const {
    data: feeds,
    isLoading,
    isError,
    error,
    status,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey:
      searchTerm.trim() === ""
        ? ["homeFeed", currentFeed, feed, time]
        : ["homeFeed", searchTerm, currentFeed, feed, time],
    queryFn: ({ pageParam = 1 }) =>
      userClient.getFeeds(pageParam, 10, currentFeed, {
        searchKey: searchTerm,
        interests: "",
        timeFilter: time,
        feedFilter: feed,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      return lastPage?.length > 0 ? pages.length + 1 : undefined;
    },
  });

  return {
    feeds,
    isLoading,
    isError,
    error,
    status,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  };
}
