/** @format */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface LoginResponse {
	accessToken: string;
	refreshToken: string;
	data: {
		_id: string;
	};
}

export class APIClient {
	protected baseURL: string;
	protected client: AxiosInstance;

	constructor(baseURL: string) {
		this.baseURL = baseURL;

		this.client = axios.create({
			baseURL: this.baseURL,
			headers: {
				'Content-Type': 'application/json'
			}
		});

		// Request interceptor to set Authorization header
		this.client.interceptors.request.use(
			(config: AxiosRequestConfig) => {
				const accessToken = this.getAccessToken();
				if (accessToken) {
					if (!config.headers) {
						config.headers = {};
					}
					config.headers['Authorization'] = `Bearer ${accessToken}`;
				}
				return config;
			},
			(error) => Promise.reject(error)
		);

		// Response interceptor to handle token refresh
		this.client.interceptors.response.use(
			(response: AxiosResponse) => response,
			async (error) => {
				const originalRequest = error.config;
				if (error.response.status === 401 && !originalRequest._retry) {
					originalRequest._retry = true;
					try {
						const { data } = await this.client.post<LoginResponse>(
							'/auth/refresh-tokens',
							{
								refreshToken: this.getRefreshToken()
							}
						);
						this.setTokens(data.accessToken, data.refreshToken, data.data._id);
						if (!originalRequest.headers) {
							originalRequest.headers = {};
						}
						originalRequest.headers[
							'Authorization'
						] = `Bearer ${this.getAccessToken()}`;
						return this.client(originalRequest);
					} catch (refreshError) {
						this.logout();
						return Promise.reject(refreshError);
					}
				}
				return Promise.reject(error);
			}
		);
	}

	setTokens(accessToken: string, refreshToken: string, userId: string) {
		localStorage.setItem('accessToken', accessToken);
		localStorage.setItem('refreshToken', refreshToken);
		localStorage.setItem('userId', userId);
	}

	getAccessToken(): string | null {
		return localStorage.getItem('accessToken');
	}

	getRefreshToken(): string | null {
		return localStorage.getItem('refreshToken');
	}

	getUserId(): string | null {
		return localStorage.getItem('userId');
	}

	clearTokens() {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
	}

	logout() {
		this.clearTokens();
		// Add any additional logout logic, such as redirecting to a login page
	}

	setContentType(contentType: string) {
		this.client.defaults.headers['Content-Type'] = contentType;
	}

	// Add other methods to handle different API endpoints
	get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
		return this.client.get<T>(url, config);
	}

	post<T>(
		url: string,
		data: any,
		config?: AxiosRequestConfig
	): Promise<AxiosResponse<T>> {
		return this.client.post<T>(url, data, config);
	}

	put<T>(
		url: string,
		data: any,
		config?: AxiosRequestConfig
	): Promise<AxiosResponse<T>> {
		return this.client.put<T>(url, data, config);
	}

	delete<T>(
		url: string,
		config?: AxiosRequestConfig
	): Promise<AxiosResponse<T>> {
		return this.client.delete<T>(url, config);
	}
}

const apiClient = new APIClient(
	'https://shark-app-ks7sj.ondigitalocean.app/v1/'
);

export default apiClient;
