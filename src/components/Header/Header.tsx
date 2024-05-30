/** @format */

import logo from './assets/SkillCollab_301222_CMYK-01 1.jpg';
import homeIcon from './assets/Navigation Icons (1).png';
import chatIcon from './assets/Navigation Icons (2).png';
import exploreIcon from './assets/Navigation Icons.png';
import notifier from './assets/Group.png';

function Header() {
	return (
		<header>
			<div className='container'>
				<div className='flex items-center '>
					<div className='logo-box'>
						<img
							src={logo}
							alt=''
						/>
					</div>
					<div className='global-search'></div>
					<nav className='nav'>
						<ul className='flex items-center '>
							<li>
								<img
									src={homeIcon}
									alt=''
								/>
							</li>
							<li>
								<img
									src={exploreIcon}
									alt=''
								/>
							</li>
							<li>
								<img
									src={chatIcon}
									alt=''
								/>
							</li>
						</ul>
					</nav>
					<div className='options'>
						<ul className='flex items-center '>
							<li>
								<img
									src={notifier}
									alt=''
								/>
							</li>
							<li>
								<img
									className='h-10 w-10 rounded-full border-black border-solid border-1px '
									src=''
									alt=''
								/>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
