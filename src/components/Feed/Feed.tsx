/** @format */
interface FeedType {
	_id: string;
	name: string;
	description: string;
	coverPhoto: string;
	groupId: null | { _id: string };
}

function Feed({ feed }: { feed: FeedType }) {
	return (
		<div className='feed shadow-[0px_1px_15px_0px_rgba(3,3,3,0.3)] rounded-[10px] p-[20px] mb-[30px]'>
			<div className='feed-header flex items-center justify-between mb-5'>
				<div className='left flex items-start gap-3'>
					<img
						className='h-10 w-10 mt-1 border-2 border-solid object-cover border-black rounded-full'
						src={feed?.coverPhoto}
						alt=''
					/>
					<div className='text'>
						<h3 className='text-sky-600 font-bold font-base'>{feed?.name}</h3>
						<h4 className='text-xs flex font-medium items-center gap-1 text-gray-600'>
							Gardener{' '}
							<span className='font-normal text-gray-400'>Thu at 12:30 PM</span>{' '}
							<strong>
								{' '}
								<img
									src=''
									alt=''
								/>{' '}
								5.3k
							</strong>
							<span className='font-normal text-gray-400 flex items-center'>
								(344)<span>*****</span>
							</span>
						</h4>
					</div>
				</div>
				<div className='right '>
					<ul className='flex items-center gap-2'>
						<li>request</li>
						<li>dotts</li>
					</ul>
				</div>
			</div>
			<div className='feed-body'>
				<h5 className='text-lg font-medium mb-4'>{feed?.description}</h5>
				<figure className='h-52 w-full overflow-hidden rounded-2xl border-2 border-solid border-black'>
					<img
						className='h-full w-full'
						src=''
						alt=''
					/>
				</figure>
			</div>
			<div className='feed-foot mt-[20px] '>
				<div className='top flex items-center w-full justify-between gap-3'>
					<div className='profile'>
						<img
							className='h-10 w-10 mt-1 border-2 border-solid border-black rounded-full'
							src=''
							alt=''
						/>
					</div>
					<div className='comment  w-full'>
						<input
							type='text'
							placeholder='enter comment'
							className='h-[45px] border-2 border-solid border-black  w-full p-5 rounded-full'
						/>
					</div>
					<div className='votes'>
						<ul className='flex gap-2 items-center'>
							<li>up</li>
							<li>down</li>
						</ul>
					</div>
				</div>
				<div className='bottom mt-4'>
					<ul className='flex gap-2 items-center justify-between'>
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
	);
}

export default Feed;
