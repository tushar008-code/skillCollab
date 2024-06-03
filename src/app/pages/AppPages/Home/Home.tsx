/** @format */

import React from "react";
import { ScrollRestoration } from "react-router-dom";
import { useHome } from "./hooks/useHome";
import HomeLoader from "./HomeLoader";
import Feed from "@/components/Feed";
import FeedType from "@/app/layouts/AppLayout/components/FeedType";
import { useHomeEffects } from "./hooks/useHomeEffects";
function Home() {
  const { feeds, fetchNextPage, isLoading, isError, isFetchingNextPage } =
    useHome();

  const { isMobile, ref } = useHomeEffects(fetchNextPage);
  if (isLoading)
    return (
      <div className="public_feeds">
        {isMobile && <FeedType />}

        <HomeLoader />
      </div>
    );
  if (isError) return <h4>There is something wrong</h4>;

  if (!feeds || feeds?.pages[0]?.length === 0) {
    return <h4 className="text-center text-xl font-semibold text-black">No feeds available</h4>;
  }

  console.log(feeds);
  
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
        {isFetchingNextPage && <HomeLoader />}
      </div>
      <ScrollRestoration />
    </div>
  );
}

export default Home;
