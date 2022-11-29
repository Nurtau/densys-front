import React, { useState, useMemo, useContext, createContext } from "react";

import { type AccessToken } from "@app/api";

const ACCESS_TOKEN_KEY = "admin_access_token_key";

interface AdminAuthContextType {
  accessToken: AccessToken | null;
  changeToken(newToken: AccessToken): void;
  deleteToken(): void;
}

const AdminAuthContext = createContext<AdminAuthContextType | null>(null);

interface AdminAuthProviderProps {
  children: React.ReactNode;
}

export const AdminAuthProvider = ({ children }: AdminAuthProviderProps) => {
  const [accessToken, setAccessToken] = useState<AccessToken | null>(() => {
    const rawData = localStorage?.getItem(ACCESS_TOKEN_KEY);

    if (!rawData) return null;

    return JSON.parse(rawData);
  });

  const contextValue: AdminAuthContextType = useMemo(
    () => ({
      accessToken,
      changeToken: (newToken: AccessToken) => {
        setAccessToken(newToken);
        localStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify(newToken));
      },
      deleteToken: () => {
        setAccessToken(null);
        localStorage.removeItem(ACCESS_TOKEN_KEY);
      },
    }),
    [accessToken]
  );

  return (
    <AdminAuthContext.Provider value={contextValue}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = (): AdminAuthContextType => {
  const contextValue = useContext(AdminAuthContext);

  if (!contextValue) {
    throw new Error("useAuth must be called within AuthProvider");
  }

  return contextValue;
};
