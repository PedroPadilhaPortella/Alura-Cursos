import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DashboardScreen from "../screens/Dashboard";
import EditProfileScreen from "../screens/EditProfile";
import DevicesScreen from "../screens/Devices";

const router = createBrowserRouter([
  {
    path: "/dashboard/:authId",
    element: <DashboardScreen />,
  },
  {
    path: "/dashboard/:authId/edit-profile",
    element: <EditProfileScreen />,
  },
  {
    path: "/dashboard/:authId/devices",
    element: <DevicesScreen />,
  },
]);

export const DashboardRoutes = () => <RouterProvider router={router} />;
