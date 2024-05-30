/** @format */

import { APIClient } from './apiClient';
import { AxiosResponse } from 'axios';

interface UserResponse {
	data: {
		lastName: string;
		userName: string;
	};
}

class UserClient extends APIClient {
	constructor(baseURL: string) {
		super(baseURL);
	}

	async getAuthUser(userId: string): Promise<AxiosResponse<UserResponse>> {
		const response = await this.client.get<UserResponse>(
			`/users/fetch?userId=${userId}`
		);
		return response;
	}
}

const userClient = new UserClient(
	'https://shark-app-ks7sj.ondigitalocean.app/v1/'
);

export default userClient;
