/** @format */

import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const validFeeds = ["all", "people", "group"];

export const useHomeEffects = (fetchNextPage: () => void) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();
  const { ref, inView } = useInView();

  useEffect(() => {
    const feedParam = searchParams.get("feed");
    if (
      pathname === "/home" &&
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
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile, ref };
};
