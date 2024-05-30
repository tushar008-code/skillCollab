/** @format */

import AppLayout from '@/app/layouts/AppLayout';

const appRoutes = [
	{
		path: 'home',
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <h3>Home</h3>
			},
			{
				path: 'profile',
				element: <h3>Profile</h3>
			}
		]
	}
];

export default appRoutes;
