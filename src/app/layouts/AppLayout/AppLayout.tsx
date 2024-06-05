/** @format */

import Header from "@/components/Header";
import { useUserRoles } from "@/store/useUserRole";

import { Outlet } from "react-router-dom";
import FeedType from "./components/FeedType";
import FeedFilter from "./components/FeedFilter";
import ProfileCard from "./components/ProfileCard";

function AppLayout() {
  const { role } = useUserRoles();

  return (
    <div id="app-layout">
      <Header  />
      <main className=" mt-6">
        <div className="container">
          <div className="main">
            <aside className="side1 mobile:hidden">
              {role === "user" && <ProfileCard />}
            </aside>
            <section>
              <Outlet context={role} />
            </section>
            <aside className="side2 mobile:hidden">
              {role === "user" ? (
                <>
                  <div className="mb-4">
                    <FeedType />
                  </div>
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
