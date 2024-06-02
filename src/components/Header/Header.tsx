/** @format */
import Drawer from './components/Drawer';
import LogoBox from './components/LogoBox';
import Navbar from './components/Navbar';
import OptionsBox from './components/OptionsBox';
import SearchBox from './components/SearchBox';
function Header({ role }: { role: string }) {
	console.log(role);

	return (
		<header className='h-16 bg-cyan-50 flex items-center mobile:h-auto mobile:pt-2 mobile:bg-white '>
			<div className='container '>
				<div className='flex items-center mobile:flex-row mobile:flex-wrap '>
					<div className='mobile:flex mobile:items-center flex-1 order-1 mobile:order-1 mobile:basis-1/2'>
						{role === 'user' && <Drawer />}

						<LogoBox />
						<SearchBox />
					</div>
					<Navbar />
					<OptionsBox role={role} />
				</div>
			</div>
		</header>
	);
}

export default Header;
