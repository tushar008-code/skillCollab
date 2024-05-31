/** @format */

import { Outlet, useNavigate } from "react-router-dom";
import { useAuthUser } from "@/hooks/useAuthUser";
import { useEffect } from "react";
import AuthLoader from "@/components/AuthLoader";

function AuthLayout() {
  const { authUser, isLoading, isError } = useAuthUser();
  const navigate = useNavigate();
  console.log(isError);
  useEffect(() => {
    if (authUser && !isLoading) return navigate("/home");
  }, [authUser, navigate, isLoading]);
  if (isLoading) return <AuthLoader />;
  if (!authUser)
    return (
      <div className="auth-layout">
        <div className="grid grid-cols-1  grid-rows-1 gap-0 desktop:grid-cols-2 min-h-screen">
          <div className="item  flex items-center justify-center">
            <Outlet />
          </div>
          <div className="h-screen item mobile:hidden tab:hidden">
            <img
              className="h-full w-screen object-cover"
              src="/login-bg.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
}

export default AuthLayout;
