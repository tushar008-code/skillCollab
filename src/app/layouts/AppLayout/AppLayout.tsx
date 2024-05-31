/** @format */

import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';

function AppLayout({ role }: { role: string }) {
	return (
		<div id='app-layout'>
			<Header role={role} />
			<main className='main'>
				<aside className='side1 mobile:hidden'>side1</aside>
				<section>
					<Outlet context={role} />
				</section>
				<aside className='side2 mobile:hidden'>side2</aside>
			</main>
			<footer>footer</footer>
		</div>
	);
}

export default AppLayout;
