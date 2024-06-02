/** @format */

import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { usePublicFeeds } from './usePublicFeeds';
import PublicLoader from './PublicLoader';
import Feed from '@/components/Feed';

function PublicHome() {
	const [searchParams, setSearchParams] = useSearchParams();
	const { pathname } = useLocation();
	const { feeds, isLoading } = usePublicFeeds();

	console.log(feeds);

	useEffect(() => {
		if (pathname === '/public/home' && !searchParams.has('feed')) {
			setSearchParams({ feed: 'all' });
		}
	}, [pathname, searchParams, setSearchParams]);
	if (isLoading) return <PublicLoader />;
	return (
		<div className='feed-list '>
			{feeds?.map((feed) => {
				return (
					<Feed
						key={feed?._id}
						feed={feed}
					/>
				);
			})}
		</div>
	);
}

export default PublicHome;
