/** @format */

import FeedBody from "./Component/FeedBody";
import FeedFoot from "./Component/FeedFoot";
import FeedHeader from "./Component/FeedHeader";

export interface FeedType {
  _id: string;
  name: string;
  description: string;
  coverPhoto: string;
  postImage: string;
  checkIn: string;
  videoUrl: string;
  gif: string;
  bgColor: string;
  groupData: {
    name: string;
  };
  groupId?: null | { _id: string; groupPhoto: string; name: string };
  userId: {
    firstName: string;
    lastName: string;
    userName: string;
    profilePhoto: string;
    // interest: string;
    expertise: string;
  };
}

function Feed({ feed }: { feed: FeedType }) {
  return (
    <div className="feed shadow-[0px_1px_15px_0px_rgba(3,3,3,0.3)] rounded-[10px] p-[20px] mb-[30px] mobile:mb-[10px] bg-white mobile:p-2">
      <FeedHeader feed={feed} />
      <FeedBody feed={feed} />
      <FeedFoot feed={feed} />
    </div>
  );
}

export default Feed;
