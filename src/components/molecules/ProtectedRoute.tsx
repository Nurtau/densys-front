import { Navigate } from "react-router-dom";

import { useAuth } from "@app/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({children}: ProtectedRouteProps) => {
  const { accessToken } = useAuth();

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
