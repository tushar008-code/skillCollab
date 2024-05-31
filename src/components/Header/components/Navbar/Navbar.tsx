/** @format */

import exploreIcon from './assets/Navigation Icons (1).png';
import chatIcon from './assets/Navigation Icons (2).png';
import homeIcon from './assets/Navigation Icons.png';
function Navbar() {
	return (
		<nav className='nav flex-1 order-2 mobile:w-full mobile:order-3 '>
			<ul className='flex items-center justify-center '>
				<li className='px-5 cursor-pointer mobile:py-3 mobile:px-3 mobile:flex-1 '>
					<img
						className='block mx-auto'
						src={homeIcon}
						alt=''
					/>
				</li>
				<li className='px-5 cursor-pointer mobile:py-3 mobile:px-3 mobile:flex-1 '>
					<img
						className='block mx-auto'
						src={exploreIcon}
						alt=''
					/>
				</li>
				<li className='px-5 cursor-pointer mobile:py-3 mobile:px-3 mobile:flex-1 '>
					<img
						className='block mx-auto'
						src={chatIcon}
						alt=''
					/>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
