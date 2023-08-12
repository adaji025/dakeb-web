import React, { useState } from "react";

type DataProviderTypes = {
  children: React.ReactNode;
};

type DataContextTypes = {
  reportData: string;
  createReport: boolean;
 loading: boolean
  setReportData: React.Dispatch<React.SetStateAction<string>>;
  setCreateReports: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  
};

export const DataContext = React.createContext({} as DataContextTypes);

const DataProvider: React.FC<DataProviderTypes> = ({ children }) => {
  const [createReport, setCreateReports] = useState<boolean>(false);
  const [reportData, setReportData] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  

  return (
    <DataContext.Provider
      value={{
        createReport,
        setCreateReports,
        reportData,
        setReportData,
        loading, setLoading
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
