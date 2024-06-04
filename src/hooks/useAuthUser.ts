/** @format */

import { useQuery } from '@tanstack/react-query';
import userClient from '@/app/services/userClient';

export function useAuthUser() {
	const userId = localStorage.getItem('userId');

	const {
		data: authUser,
		isLoading,
		isError
	} = useQuery({
		queryKey: ['authUser'],
		queryFn: async () => {
			const res = await userClient.getAuthUser(userId);
			return res.data.data;
		},
		enabled: !!userId
	});
	return { authUser, isLoading, isError };
}
