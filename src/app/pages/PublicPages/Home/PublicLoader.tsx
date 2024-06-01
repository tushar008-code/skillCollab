/** @format */
import { Skeleton } from '@/components/ui/skeleton';

import React from 'react';

function PublicLoader() {
	return (
		<div className='flex flex-col space-y-3'>
			<Skeleton className='h-[250px] w-full rounded-xl' />
			<Skeleton className='h-[250px] w-full rounded-xl' />
			<Skeleton className='h-[250px] w-full rounded-xl' />
			<Skeleton className='h-[250px] w-full rounded-xl' />
		</div>
	);
}

export default PublicLoader;
