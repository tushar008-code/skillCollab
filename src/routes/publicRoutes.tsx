/** @format */

import AppLayout from '@/app/layouts/AppLayout';
import PublicLayout from '@/app/layouts/PublicLayout';
import PublicHome from '@/app/pages/PublicPages/Home';
import { Navigate } from 'react-router-dom';

const publicRoutes = [
	{
		path: '/public',
		element: <Navigate to='/public/home' />
	},
	{
		path: '/public',
		element: <PublicLayout />,
		children: [
			{
				element: <AppLayout />,
				children: [{ path: 'home', element: <PublicHome /> }]
			}
		]
	}
];

export default publicRoutes;
