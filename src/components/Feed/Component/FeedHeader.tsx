import { BsThreeDots } from "react-icons/bs";
import { FeedType } from "../Feed";
import friendRequest from "../assets/People_request.png";
import grouprequest from "../assets/groupRequest.png";
import profileFallBack from "../assets/profilefallback.jpg";
import groupImgFallBack from "../assets/groupImg.png";

function FeedHeader({ feed }: { feed: FeedType }) {
  if (feed?.groupId) {
    return (
      <div className="feed-header flex items-center justify-between mb-5 mobile:items-start">
        <div className="left flex items-start gap-3 ">
          <div className="relative">
            {" "}
            <img
              className="h-10 w-10  mt-1 mobile:mt-0  object-cover border-cyan-500 rounded-full"
              src={feed?.groupId?.groupPhoto || groupImgFallBack}
              alt=""
            />
            <img
              src={feed?.userId?.profilePhoto || profileFallBack}
              alt=""
              className="h-6 w-6 object-cover absolute rounded-full bottom-0 right-0"
            />
          </div>

          <div className="text">
            <h3 className="text-sky-600 font-bold font-base mobile:text-xs">
              {feed?.groupId?.name}
            </h3>
            <h4 className="text-xs flex font-medium items-center gap-1 text-gray-600">
              {feed?.userId?.firstName + " " + feed?.userId?.lastName}{" "}
              <span className="font-normal text-gray-400">Thu at 12:30 PM</span>{" "}
              <strong>
                {" "}
                <img src="" alt="" /> 5.3k
              </strong>
              <span className="font-normal text-gray-400 flex items-center">
                (344)<span>*****</span>
              </span>
            </h4>
          </div>
        </div>
        <div className="right ">
          <ul className="flex items-center gap-2">
            <li>
              <img src={grouprequest} alt="" className="mobile:h-7" />
            </li>
            <li>
              <BsThreeDots />
            </li>
          </ul>
        </div>
      </div>
    );
  }
  if (feed?.groupId === null) {
    return (
      <div className="feed-header flex items-center justify-between mb-5  mobile:items-start">
        <div className="left flex items-start gap-3">
          <img
            className="h-10 w-10 mt-1 mobile:mt-0 border-2 border-solid object-cover border-black rounded-full"
            src={feed?.userId?.profilePhoto ?? profileFallBack}
            alt=""
          />
          <div className="text">
            <h3 className="text-sky-600 font-bold font-base mobile:text-xs">
              {feed?.userId?.firstName + " " + feed?.userId?.lastName}
            </h3>
            <h4 className="text-xs flex font-medium items-center gap-1 text-gray-600">
              {feed?.userId?.expertise}
              <span className="font-normal text-gray-400">
                Thu at 12:30 PM
              </span>{" "}
              <strong>
                {" "}
                <img src="" alt="" /> 5.3k
              </strong>
              <span className="font-normal text-gray-400 flex items-center">
                (344)<span>*****</span>
              </span>
            </h4>
          </div>
        </div>
        <div className="right ">
          <ul className="flex items-center gap-2">
            <li>
              <img src={friendRequest} alt="" className="mobile:h-7" />
            </li>
            <li>
              <BsThreeDots />
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="feed-header flex items-center justify-between mb-5 mobile:items-start">
      <div className="left flex items-start gap-3 ">
        <div className="relative">
          {" "}
          <img
            className="h-10 w-10  mt-1 mobile:mt-0  object-cover border-cyan-500 rounded-full"
            src={feed?.groupId?.groupPhoto || groupImgFallBack}
            alt=""
          />
          <img
            src={feed?.userId?.profilePhoto || profileFallBack}
            alt=""
            className="h-6 w-6 object-cover absolute rounded-full bottom-0 right-0"
          />
        </div>

        <div className="text">
          <h3 className="text-sky-600 font-bold font-base mobile:text-xs">
            {feed?.name}
          </h3>
          <h4 className="text-xs flex font-medium items-center gap-1 text-gray-600">
            {feed?.userId?.firstName + " " + feed?.userId?.lastName}{" "}
            <span className="font-normal text-gray-400">Thu at 12:30 PM</span>{" "}
            <strong>
              {" "}
              <img src="" alt="" /> 5.3k
            </strong>
            <span className="font-normal text-gray-400 flex items-center">
              (344)<span>*****</span>
            </span>
          </h4>
        </div>
      </div>
      <div className="right ">
        <ul className="flex items-center gap-2">
          <li>
            <img src={grouprequest} alt="" className="mobile:h-7" />
          </li>
          <li>
            <BsThreeDots />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FeedHeader;
