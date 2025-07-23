import { Outlet, useNavigate } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useEffect } from "react";

export const ProtectedRoute = () => {
  const { session } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate('/auth/login');
    }
  }, [session, navigate]);

  return <Outlet />;
}