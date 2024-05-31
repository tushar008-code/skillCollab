/** @format */

import { createBrowserRouter } from "react-router-dom";
import authRoutes from "./authRoutes";
import appRoutes from "./appRoutes";
import publicRoutes from "./publicRoutes";

const routes = createBrowserRouter([
  ...authRoutes,
  ...publicRoutes,
  ...appRoutes,
]);

export default routes;
