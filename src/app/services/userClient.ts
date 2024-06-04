/** @format */

import { APIClient } from "./apiClient";
import { AxiosResponse } from "axios";

interface UserResponse {
  data: {
    lastName: string;
    userName: string;
    profilePhoto: string;
  };
}

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

type FeedTypesKeys = "all" | "people" | "group";

const feedTypes: Record<FeedTypesKeys, string> = {
  all: "/users/get-all-people-group",
  people: "/users/get-all-people",
  group: "/group/get-public-posts",
};

class UserClient extends APIClient {
  constructor(baseURL: string) {
    super(baseURL);
  }

  async getAuthUser(
    userId: string | null
  ): Promise<AxiosResponse<UserResponse>> {
    const response = await this.client.get<UserResponse>(
      `/users/fetch?userId=${userId}`
    );
    return response;
  }

  async getFeeds(
    page = 1,
    pageSize = 10,
    currentFeed: FeedTypesKeys = "all",
    data = {}
  ): Promise<AxiosResponse<HomeFeedResponse>> {
    const response = await this.client.post(
      `${feedTypes[currentFeed]}?page=${page}&pageSize=${pageSize}`,
      data
    );
    return response.data.data;
  }
}

const userClient = new UserClient(
  "https://shark-app-ks7sj.ondigitalocean.app/v1/"
);

export default userClient;
