/** @format */

import { APIClient } from './apiClient';
import { AxiosResponse } from 'axios';
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

class PublicClient extends APIClient {
	constructor(baseURL: string) {
		super(baseURL);
	}

	async getPublicFeeds(
		page = 1,
		pageSize = 10,
		data = {}
	): Promise<AxiosResponse<HomeFeedResponse>> {
		const response = await this.client.post(
			`/group/get-without-all-group?page=${page}&pageSize=${pageSize}`,
			data
		);
		return response.data.data;
	}
}

const publicClient = new PublicClient(
	'https://shark-app-ks7sj.ondigitalocean.app/v1/'
);

export default publicClient;
