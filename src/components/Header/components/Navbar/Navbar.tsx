/** @format */
import { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import exploreIcon from './assets/Navigation Icons (1).png';
import chatIcon from './assets/Navigation Icons (2).png';
import homeIcon from './assets/Navigation Icons.png';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

function Navbar() {
	const location = useLocation();
	const [open, setOpen] = useState(false);
	const isPublicPath = location.pathname.startsWith('/public' || '/home');
	const navigate = useNavigate();
	return (
		<nav className='nav flex-1 order-2 mobile:w-full mobile:order-3 '>
			<ul className='flex items-center justify-center gap-5 '>
				<li
					className={`px-5 cursor-pointer mobile:py-3 mobile:px-3 mobile:flex-1 ${
						isPublicPath ? 'img-active' : ''
					}`}>
					<img
						className='block mx-auto'
						src={homeIcon}
						alt='Home'
					/>
				</li>
				<li className='px-5 cursor-pointer mobile:py-3 mobile:px-3 mobile:flex-1 '>
					{isPublicPath ? (
						<Dialog
							open={open}
							onOpenChange={setOpen}>
							<DialogTrigger asChild>
								<img
									className='block mx-auto'
									src={exploreIcon}
									alt='Explore'
								/>
							</DialogTrigger>
							<DialogContent className='max-w-[425px] mobile:max-w-[330px] '>
								{' '}
								<h5 className='text-center font-semibold mobile:text-sm mobile:font-normal mt-5'>
									Please login first your are in guest mode
								</h5>
								<Button
									className='mobile:h-[40px]'
									onClick={() => navigate('/')}>
									Login
								</Button>
								<Button
									variant={'ghost'}
									className='mobile:h-[40px]'
									onClick={() => navigate('/auth/register')}>
									Sign up
								</Button>
							</DialogContent>
						</Dialog>
					) : (
						<img
							className='block mx-auto'
							src={exploreIcon}
							alt='Explore'
						/>
					)}
				</li>
				<li className='px-5 cursor-pointer mobile:py-3 mobile:px-3 mobile:flex-1 '>
					{isPublicPath ? (
						<Dialog
							open={open}
							onOpenChange={setOpen}>
							<DialogTrigger asChild>
								<img
									className='block mx-auto'
									src={chatIcon}
									alt='Chat'
								/>
							</DialogTrigger>
							<DialogContent className='max-w-[425px] mobile:max-w-[330px] '>
								{' '}
								<h5 className='text-center font-semibold mobile:text-sm mobile:font-normal mt-5'>
									Please login first your are in guest mode
								</h5>
								<Button
									className='mobile:h-[40px]'
									onClick={() => navigate('/')}>
									Login
								</Button>
								<Button
									variant={'ghost'}
									className='mobile:h-[40px]'
									onClick={() => navigate('/auth/register')}>
									Sign up
								</Button>
							</DialogContent>
						</Dialog>
					) : (
						<img
							className='block mx-auto'
							src={chatIcon}
							alt='Chat'
						/>
					)}
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
