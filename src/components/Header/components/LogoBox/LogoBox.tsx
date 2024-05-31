/** @format */

import logo from './assets/SkillCollab_301222_CMYK-01 1.jpg';
import logo2 from './assets/logo.png';
function LogoBox() {
	return (
		<>
			<div className='logo-box mobile:hidden'>
				<img
					src={logo}
					alt=''
				/>
			</div>
			<div className='logo-box hidden mobile:block order-2'>
				<img
					className='h-7 mt-1'
					src={logo2}
					alt=''
				/>
			</div>
		</>
	);
}

export default LogoBox;
