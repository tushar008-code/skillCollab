import { useAuthUser } from "@/hooks/useAuthUser";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import GlobalLoader from "@/components/GlobalLoader";
function ProtectedLayout() {
  const { authUser, isLoading } = useAuthUser();
  const navigate = useNavigate();
  const isAuthenticated = !!authUser;

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/");
  }, [isAuthenticated, navigate, isLoading]);

  if (isLoading) return <GlobalLoader />;
  if (authUser) return <Outlet />;
}

export default ProtectedLayout;
