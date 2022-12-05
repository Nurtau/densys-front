import { useQuery } from "react-query";
import React, { useContext, createContext } from "react";

import { api, type Specialisation } from "@app/api";

const SpecialisationsContext = createContext<Specialisation[] | null>(null);

interface SpecialisationsProviderProps {
  children: React.ReactNode;
}

export const SpecialisationsProvider = ({
  children,
}: SpecialisationsProviderProps) => {
  const { data } = useQuery("specialisations", () => api.getSpecialisations());

  return (
    <SpecialisationsContext.Provider value={data ?? []}>
      {children}
    </SpecialisationsContext.Provider>
  );
};

export const useSpecialisations = (): Specialisation[] => {
  const contextValue = useContext(SpecialisationsContext);

  if (!contextValue) {
    throw new Error(
      "useSpecialisations must be called within SpecialisationsProvider"
    );
  }

  return contextValue;
};
