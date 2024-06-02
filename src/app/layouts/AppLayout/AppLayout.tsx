/** @format */

import Header from '@/components/Header';
import { useUserRoles } from '@/store/useUserRole';

import { Outlet } from 'react-router-dom';

function AppLayout() {
	const { role } = useUserRoles();

	return (
		<div id='app-layout'>
			<Header role={role} />
			<main className='main mt-6'>
				<aside className='side1 mobile:hidden'>
					{role === 'user' && <h6>Side 2</h6>}
				</aside>
				<section>
					<Outlet context={role} />
				</section>
				<aside className='side2 mobile:hidden'>
					{role === 'user' && <h6>Side 2</h6>}
				</aside>
			</main>
			<footer>footer</footer>
		</div>
	);
}

export default AppLayout;
