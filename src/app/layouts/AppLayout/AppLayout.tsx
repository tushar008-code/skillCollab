/** @format */

import Header from '@/components/Header';
import { useAuthUser } from '@/hooks/useAuthUser';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';

function AppLayout() {
	const { authUser, isLoading } = useAuthUser();
	const navigate = useNavigate();
	const isAuthenticated = !!authUser;
	console.log(authUser, isLoading);

	useEffect(() => {
		if (!isAuthenticated && !isLoading) navigate('/');
	}, [isAuthenticated, navigate, isLoading]);

	if (isLoading)
		return (
			<div className='loader'>
				<Skeleton className='w-full h-[80px] rounded' />
				<div className='body'>
					<Skeleton className='rounded' />
					<Skeleton className='rounded' />
					<Skeleton className='rounded' />
				</div>
				<Skeleton className='w-full h-[80px] rounded' />
			</div>
		);
	if (authUser)
		return (
			<div id='app-layout'>
				<Header />
				<main>
					<Outlet />
				</main>
				<footer>footer</footer>
			</div>
		);
}

export default AppLayout;
