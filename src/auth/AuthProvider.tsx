import React, { useState, useMemo, useContext, createContext } from "react";

import { type AccessToken } from "@densys/api-client";

const ACCESS_TOKEN_KEY = "access_token_key";

interface AuthContextType {
  accessToken: AccessToken | null;
  changeToken(newToken: AccessToken): void;
  deleteToken(): void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [accessToken, setAccessToken] = useState<AccessToken | null>(() => {
    const rawData = localStorage?.getItem(ACCESS_TOKEN_KEY);

    if (!rawData) return null;

    return JSON.parse(rawData);
  });

  const contextValue: AuthContextType = useMemo(
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
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const contextValue = useContext(AuthContext);

  if (!contextValue) {
    throw new Error("useAuth must be called within AuthProvider");
  }

  return contextValue;
};
