/** @format */

import AppLayout from "@/app/layouts/AppLayout";
import ProtectedLayout from "@/app/layouts/ProtectedLayout";
import { Home } from "@/app/pages/AppPages";

const appRoutes = [
  {
    path: "home",
    element: <ProtectedLayout />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "profile",
            element: <h3>Profile</h3>,
          },
        ],
      },
    ],
  },
];

export default appRoutes;
