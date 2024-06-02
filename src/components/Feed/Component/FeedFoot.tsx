import upVote from "../assets/upvote.png";
import downVote from "../assets/downvite.png";
import { FeedType } from "../Feed";
import profileFallBack from "../assets/profilefallback.jpg";
import { BiMessageDetail } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";
import { useAuthUser } from "@/hooks/useAuthUser";

function FeedFoot({ feed }: { feed: FeedType }) {
  const { authUser } = useAuthUser();
  return (
    <div className="feed-foot mt-[20px] ">
      <div className="top flex items-center w-full justify-start gap-3">
        <div className="profile">
          <img
            className="h-10 w-10  mobile:h-8 mobile:w-8 object-cover rounded-full"
            src={authUser?.profilePhoto ?? profileFallBack}
            alt=""
          />
        </div>
        <div className="comment max-w-[300px] mobile:max-w-[220px] w-full">
          <input
            type="text"
            placeholder="enter comment"
            className="h-[45px] mobile:h-[35px]  w-full p-5 rounded-full mobile:text-xs mobile:px-2 py-2"
          />
        </div>
        <div className="votes ml-auto ">
          <ul className="flex gap-2 items-center justify-end">
            <li>
              <img
                src={upVote}
                alt=""
                className="h-8 w-8 mobile:h-6 mobile:w-6"
              />
            </li>
            <li>
              <img
                src={downVote}
                alt=""
                className="h-8 w-8 mobile:h-6 mobile:w-6"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom mt-4">
        <ul className="flex gap-2 items-center justify-between">
          <li className="flex items-center gap-1 cursor-pointer">
            <BiMessageDetail size={25} fill="gray" />
            <span className="text-sm mobile:text-xs font-semibold">20</span>
          </li>
          <li className="cursor-pointer">
            <FaShareAlt fill="gray" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FeedFoot;
