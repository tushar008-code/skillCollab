/** @format */

import Header from "@/components/Header";
import { useUserRoles } from "@/store/useUserRole";

import { Outlet } from "react-router-dom";
import FeedType from "./components/FeedType";
import FeedFilter from "./components/FeedFilter";

function AppLayout() {
  const { role } = useUserRoles();

  return (
    <div id="app-layout">
      <Header role={role} />
      <main className=" mt-6">
        <div className="container">
          <div className="main">
            <aside className="side1 mobile:hidden">
              {role === "user" && <h6>Side 2</h6>}
            </aside>
            <section>
              <Outlet context={role} />
            </section>
            <aside className="side2 mobile:hidden">
              {role === "user" ? (
                <>
                  <FeedType />
                  <FeedFilter />
                </>
              ) : (
                <FeedType />
              )}
            </aside>
          </div>
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default AppLayout;
