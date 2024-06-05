/** @format */

import AppLayout from "@/app/layouts/AppLayout";
import ProfileLayout from "@/app/layouts/ProfileLayout";
import ProtectedLayout from "@/app/layouts/ProtectedLayout";
import { Home } from "@/app/pages/AppPages";
import Profile from "@/app/pages/AppPages/Profile";

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
        ],
      },
      {
        path: "profile",
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
        ],
      },
    ],
  },
];

export default appRoutes;
