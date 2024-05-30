/** @format */

import { APIClient, LoginResponse } from './apiClient';
import { AxiosResponse } from 'axios';

interface RegisterResponse {
	message: string;
}

interface ForgotPasswordResponse {
	message: string;
}

class AuthClient extends APIClient {
	constructor(baseURL: string) {
		super(baseURL);
	}

	async login(credentials: {
		email: string;
		password: string;
		deviceToken: string;
	}): Promise<AxiosResponse<LoginResponse>> {
		const response = await this.client.post<LoginResponse>(
			'/auth/login',
			credentials
		);
		const { accessToken, refreshToken } = response.data;
		this.setTokens(accessToken, refreshToken, response.data.data?._id);
		return response;
	}

	async register(userDetails: {
		username: string;
		password: string;
		email: string;
	}): Promise<AxiosResponse<RegisterResponse>> {
		return this.client.post<RegisterResponse>('/auth/register', userDetails);
	}

	async forgotPassword(
		email: string
	): Promise<AxiosResponse<ForgotPasswordResponse>> {
		return this.client.post<ForgotPasswordResponse>('/auth/forgot-password', {
			email
		});
	}

	logout() {
		this.clearTokens();
		// Add any additional logout logic, such as redirecting to a login page
	}
}

const authClient = new AuthClient(
	'https://shark-app-ks7sj.ondigitalocean.app/v1/'
);

export default authClient;
