/** @format */

import { useSearchParams } from "react-router-dom";
import all from "./assets/all.png";
import people from "./assets/people.png";
import group from "./assets/group.png";

const feedTypes = [
  { id: "all", label: "All", icon: all },
  { id: "people", label: "People", icon: people },
  { id: "group", label: "Groups", icon: group },
];

function FeedType() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFeed = searchParams.get("feed") || "all";

  const handleClick = (feedType: string) => {
    setSearchParams({ feed: feedType });
  };

  return (
    <div className="feed-type bg-white shadow-[0px_1px_15px_0px_rgba(3,3,3,0.3)] overflow-hidden rounded-xl mobile:mb-3 mobile:p-1">
      <ul className="mobile:flex ">
        {feedTypes.map((feed) => (
          <li
            key={feed.id}
            className={`flex items-center gap-2 font-medium py-2 px-2   cursor-pointer mobile:flex-1 mobile:justify-center mobile:text-xs mobile:rounded-lg ${
              currentFeed === feed.id ? "bg-sky-200" : ""
            }`}
            onClick={() => handleClick(feed.id)}
          >
            <span>
              <img className="mobile:w-6 mobile:h-6" src={feed.icon} alt={feed.label} />
            </span>
            {feed.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeedType;
