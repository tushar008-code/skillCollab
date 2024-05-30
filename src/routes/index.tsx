/** @format */

import { createBrowserRouter } from 'react-router-dom';
import authRoutes from './authRoutes';
import appRoutes from './appRoutes';

const routes = createBrowserRouter([...authRoutes, ...appRoutes]);

export default routes;
