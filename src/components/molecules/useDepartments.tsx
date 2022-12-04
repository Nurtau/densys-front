import { useQuery } from "react-query";
import React, { useContext, createContext } from "react";

import { api, type Department } from "@app/api";

const DepartmentsContext = createContext<Department[] | null>(null);

interface DepartmentsProviderProps {
  children: React.ReactNode;
}

export const DepartmentsProvider = ({ children }: DepartmentsProviderProps) => {
  const { data } = useQuery("departments", () => api.getDepartments());

  return (
    <DepartmentsContext.Provider value={data ?? []}>
      {children}
    </DepartmentsContext.Provider>
  );
};

export const useDepartments = (): Department[] => {
  const contextValue = useContext(DepartmentsContext);

  if (!contextValue) {
    throw new Error("useDepartments must be called within DepartmentsProvider");
  }

  return contextValue;
};
