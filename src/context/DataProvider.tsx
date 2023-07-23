import React from "react";

type DataProviderTypes = {
  children: React.ReactNode;
};

type DataContextTypes = {
  createReport: boolean;
  setCreateReports: React.Dispatch<React.SetStateAction<boolean>>;
  reportData: string
  setReportData: React.Dispatch<React.SetStateAction<string>>;
};

export const DataContext = React.createContext({} as DataContextTypes);

const DataProvider: React.FC<DataProviderTypes> = ({ children }) => {
  const [createReport, setCreateReports] = React.useState<boolean>(false);
  const [reportData, setReportData] = React.useState<string>("");

  const value = { createReport, setCreateReports, reportData, setReportData };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
