import { Navigate } from "react-router-dom";

import { useAdminAuth } from "@app/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  navigateTo: string;
}

export const ProtectedRoute = ({ children, navigateTo }: ProtectedRouteProps) => {
  const { accessToken } = useAdminAuth();

  if (!accessToken) {
    return <Navigate to={navigateTo} />;
  }

  return <>{children}</>;
};
