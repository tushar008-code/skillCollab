import { FeedType } from "../Feed";

function formatColor(bgColor: string) {
  if (bgColor && bgColor.startsWith("0x")) {
    return `#${bgColor.slice(2)}`;
  }
  return bgColor;
}

function FeedBody({ feed }: { feed: FeedType }) {
  let content;

  if (
    feed?.bgColor &&
    !(feed?.videoUrl || feed?.gif || feed?.checkIn || feed?.postImage)
  ) {
    // Case when only bgColor and description are present
    content = (
      <h6
        className={`h-[300px] w-full flex items-center justify-center ${
          formatColor(feed?.bgColor) ? "text-white" : "text-black"
        } text-3xl font-bold`}
        style={{ backgroundColor: formatColor(feed?.bgColor) }}
      >
        {feed?.description}
      </h6>
    );
  } else {
    content = (
      <div>
        <h5
          className={`${
            formatColor(feed?.bgColor) ? "text-white" : "text-black"
          } text-lg font-medium mb-4 mobile:text-xs mobile:leading-6 mobile:line-clamp-3 line-clamp-4 p-2 rounded-lg`}
          style={{
            backgroundColor: formatColor(feed?.bgColor) || "transparent",
          }}
        >
          <pre>{feed?.description}</pre>
        </h5>
        {feed?.postImage && (
          <figure className="h-[300px] mobile:h-[200px] w-full overflow-hidden rounded-2xl">
            <img
              className="h-full w-full object-cover object-center"
              src={feed?.postImage}
              alt=""
            />
          </figure>
        )}
        {feed?.videoUrl && (
          <div className="video-box">
            <video
              src={feed?.videoUrl}
              controls
              className="h-[300px] w-full"
            ></video>
          </div>
        )}
        {feed?.gif && (
          <figure className="h-[300px] mobile:h-[200px] w-full overflow-hidden rounded-2xl">
            <img
              className="h-full w-full object-cover object-center"
              src={feed?.gif}
              alt=""
            />
          </figure>
        )}
        {feed?.checkIn && <h6>{feed?.checkIn}</h6>}
      </div>
    );
  }

  return <div className="feed-body">{content}</div>;
}

export default FeedBody;
