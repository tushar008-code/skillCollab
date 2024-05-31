/** @format */

import AppLayout from "@/app/layouts/AppLayout";
import ProtectedLayout from "@/app/layouts/ProtectedLayout";

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
            element: <h3>Home</h3>,
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
