/** @format */

import userClient from "@/app/services/userClient";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

interface PublicFeedType {
  pageSize: number;
  searchKey: string;
  timeFilter: string;
}

export function useHome({ pageSize, searchKey, timeFilter }: PublicFeedType) {
  const [searchParams] = useSearchParams();
  const currentFeed = searchParams.get("feed") || "all";
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
    queryKey: ["publicFeed", pageSize, searchKey, timeFilter, currentFeed],
    queryFn: ({ pageParam = 1 }) =>
      userClient.getFeeds(pageParam, pageSize, currentFeed, {
        searchKey,
        interests: "",
        timeFilter,
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
