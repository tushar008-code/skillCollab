/** @format */

import { useUserRoles } from "@/store/useUserRole";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function PublicLayout() {
  const { role } = useUserRoles();
  const navigate = useNavigate();

  useEffect(() => {
    if (role === "user") return navigate("/home");
    // if (!role) return navigate('/');
  }, [role, navigate]);
  // if(role==='user')
  if (role === "guest") return <Outlet />;
}

export default PublicLayout;
