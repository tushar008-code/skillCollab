/** @format */

import AuthLayout from '@/app/layouts/AuthLayout';
import { Login } from '@/app/pages/AuthPages';
import { Navigate } from 'react-router-dom';

const authRoutes = [
	{
		path: '/',
		element: <Navigate to='/auth' />
	},
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{
				index: true,
				element: <Login />
			},
			{
				path: 'register',
				element: (
					<div>
						<h1>register</h1>
					</div>
				)
			}
		]
	}
];

export default authRoutes;
