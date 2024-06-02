/** @format */

import React, { useEffect, useState } from "react";
import {
  ScrollRestoration,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { usePublicFeeds } from "./usePublicFeeds";
import PublicLoader from "./PublicLoader";
import Feed from "@/components/Feed";
import { useInView } from "react-intersection-observer";
import FeedType from "@/app/layouts/AppLayout/components/FeedType";
function PublicHome() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);
  const pageSize = 10;
  const searchKey = "";
  const timeFilter = "allTime";
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();
  const { ref, inView } = useInView();
  const { feeds, fetchNextPage, isLoading, isError, isFetchingNextPage } =
    usePublicFeeds({
      pageSize: pageSize,
      searchKey: searchKey,
      timeFilter: timeFilter,
    });

  useEffect(() => {
    const validFeeds = ["all", "people", "group"];
    const feedParam = searchParams.get("feed");

    if (
      pathname === "/public/home" &&
      (!feedParam || !validFeeds.includes(feedParam))
    ) {
      setSearchParams({ feed: "all" });
    }
  }, [pathname, searchParams, setSearchParams]);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (isLoading)
    return (
      <div className="public_feeds">
        {isMobile && <FeedType />}

        <PublicLoader />
      </div>
    );
  if (isError) return <h4>There is something wrong</h4>;

  return (
    <div className="public_feeds">
      {isMobile && <FeedType />}
      {feeds?.pages?.map((group, i) => (
        <React.Fragment key={i}>
          {group?.map((feed) => (
            <Feed key={feed?._id} feed={feed} />
          ))}
        </React.Fragment>
      ))}
      <div ref={ref} className="load">
        {isFetchingNextPage && <PublicLoader />}
      </div>
      <ScrollRestoration />
    </div>
  );
}

export default PublicHome;
