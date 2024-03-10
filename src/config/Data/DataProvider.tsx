import { ReactNode, createContext, useEffect, useState } from 'react';
import { PregnancyInterface } from '../../services/types/PregnaciesType';
import { GetPregnancies } from '../../services/PregnanciesServices';

interface DataContextType {
  pregnanciesList: Array<PregnancyInterface>;
}

interface DataProviderProps {
  children: ReactNode;
}

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export function DataProvider({ children }: DataProviderProps) {
  const [pregnanciesList, setPregnantList] =
    useState<Array<PregnancyInterface>>();

  useEffect(() => {
    const getAllPregnancies = async () => {
      const response = await GetPregnancies();
      if (response?.status == 200) {
        setPregnantList(response.data);
      }
    };

    getAllPregnancies();
  }, []);

  return (
    <DataContext.Provider value={{ pregnanciesList }}>
      {children}
    </DataContext.Provider>
  );
}
