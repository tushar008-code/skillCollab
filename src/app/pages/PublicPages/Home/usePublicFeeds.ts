/** @format */

import publicClient from '@/app/services/publicClient';
import { useQuery } from '@tanstack/react-query';

export function usePublicFeeds() {
	const {
		data: feeds,
		isLoading,
		isError,
		error
	} = useQuery({
		queryKey: ['publicFeed'],
		queryFn: () =>
			publicClient.getPublicFeeds(1, 10, {
				searchKey: '',
				interests: '',
				timeFilter: 'allTime'
			})
	});

	return { feeds, isLoading, isError, error };
}
