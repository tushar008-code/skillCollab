/** @format */

import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { usePublicFeeds } from './usePublicFeeds';
import PublicLoader from './PublicLoader';

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
		<div className='feed-list'>
			<div className='feed shadow-[0px_1px_15px_0px_rgba(3,3,3,0.3)] rounded-[10px] p-[20px]'>
				<div className='feed-header'>
					<div className='left'>
						<img
							className='h-5 w-5'
							src=''
							alt=''
						/>
						<div className='text'>
							<h3>Annette Black</h3>
							<h4>
								Gardener <span>Thu at 12:30 PM</span>{' '}
								<strong>
									{' '}
									<img
										src=''
										alt=''
									/>{' '}
									5.3k
								</strong>
								<span>(344)*****</span>
							</h4>
						</div>
					</div>
					<div className='right'>
						<ul>
							<li>request</li>
							<li>dotts</li>
						</ul>
					</div>
				</div>
				<div className='feed-body'>
					<h5>
						Trying new cuisines from the specialized grown varieties veggies in
						my garden
					</h5>
					<figure>
						<img
							src=''
							alt=''
						/>
					</figure>
				</div>
				<div className='feed-foot'>
					<div className='top'>
						<div className='profile'></div>
						<div className='comment'></div>
						<div className='votes'>
							<ul>
								<li>up</li>
								<li>down</li>
							</ul>
						</div>
					</div>
					<div className='bottom'>
						<ul>
							<li>
								<img
									src=''
									alt=''
								/>
								20
							</li>
							<li>share</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PublicHome;
