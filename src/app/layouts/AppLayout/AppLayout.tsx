/** @format */

import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div id="app-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default AppLayout;
