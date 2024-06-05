import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

function ProfileLayout() {
  return (
    <div id="profile-layout">
      <Header />
      <main className=" mt-6">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default ProfileLayout;
