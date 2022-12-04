import React, { useState, useMemo, useContext, createContext } from "react";

import { type PatientPublic, type DoctorPublic } from "@app/api";

const USER_STORAGE_KEY = "current_user";

type PatientStored = {
  role: "patient";
  user: PatientPublic;
};

type DoctorStored = {
  role: "doctor";
  user: DoctorPublic;
};

interface AuthContextType {
  me: PatientStored | DoctorStored | null;
  updateMe(me: PatientStored | DoctorStored): void;
  removeMe(): void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [me, setMe] = useState<PatientStored | DoctorStored | null>(() => {
    const rawData = localStorage?.getItem(USER_STORAGE_KEY);

    if (!rawData) return null;

    return JSON.parse(rawData);
  });

  const contextValue: AuthContextType = useMemo(
    () => ({
      me,
      updateMe: (newMe) => {
        setMe(newMe);
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newMe));
      },
      removeMe: () => {
        setMe(null);
        localStorage.removeItem(USER_STORAGE_KEY);
      },
    }),
    [me]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useMe = (): AuthContextType => {
  const contextValue = useContext(AuthContext);

  if (!contextValue) {
    throw new Error("useMe must be called within AuthProvider");
  }

  return contextValue;
};
