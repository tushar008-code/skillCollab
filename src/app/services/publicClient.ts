/** @format */

import { APIClient } from "./apiClient";
import { AxiosResponse } from "axios";
interface FeedType {
  name: string;
  description: string;
}
interface HomeFeedResponse {
  data: {
    data: {
      data: FeedType[];
    };
  };
}
// type FeedTypes = {
//   all: string;
//   people: string;
//   group: string;
// };

const feedTypes = {
  ["all"]: "/users/get-without-all-people-group",
  ["people"]: "/users/get-without-all-people",
  ["group"]: "/group/get-without-all-group",
};

class PublicClient extends APIClient {
  constructor(baseURL: string) {
    super(baseURL);
  }

  async getPublicFeeds(
    page = 1,
    pageSize = 10,
    currentFeed = "all",
    data = {}
  ): Promise<AxiosResponse<HomeFeedResponse>> {
    const response = await this.client.post(
      `${feedTypes[currentFeed]}?page=${page}&pageSize=${pageSize}`,
      data
    );
    return response.data.data;
  }
}

const publicClient = new PublicClient(
  "https://shark-app-ks7sj.ondigitalocean.app/v1/"
);

export default publicClient;
