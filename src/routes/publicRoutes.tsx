/** @format */

import AppLayout from "@/app/layouts/AppLayout";
import { Navigate } from "react-router-dom";

const publicRoutes = [
  {
    path: "/public",
    element: <Navigate to="/public/all" />,
  },
  {
    path: "/public",
    element: <AppLayout />,
    children: [
      { path: "all", element: <h3>PhublicHome</h3> },
      { path: "peoples", element: <h3>peopleHome</h3> },
      { path: "groups", element: <h3>GroupHome</h3> },
      { path: "feedDetail/:id", element: <h3>publicFeedDetail</h3> },
    ],
  },
];

export default publicRoutes;
