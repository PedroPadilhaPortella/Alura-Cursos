import { useEffect } from "react";

import { getAuthInfo } from "@home-hub/react-utils";
import { DashboardRoutes } from "./routes";

export default function App() {
  useEffect(() => {
    const { isAuthenticated } = getAuthInfo();
    if (!isAuthenticated) location.replace("/");
  }, []);

  return (
    <div id="single-spa-application:react-dashboard">
      <DashboardRoutes />
    </div>
  );
}
