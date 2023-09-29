import React, { useState, useEffect, useMemo } from "react";
import { LoadingOverlay } from "@mantine/core";
import { CatMenu } from "../../components/Reports/CatMenu";
import { DataContext } from "../../context/DataProvider";
import ReportTable from "../../components/Reports/ReportTable";
import useNotification from "../../hooks/useNotification";
import { getReports } from "../../services/reports/reports";
import Layout from "../../components/LoggedIn/Layout";
import { ReportTypes } from "../../types/reports";

const Reports = () => {
  const [tableType, setTableType] = useState("All");
  const [loading, setLoading] = useState(false);
  const [reports, setReports] = useState<ReportTypes[]>([]);
  const { handleError } = useNotification();

  const { createReport } = React.useContext(DataContext);
  const tableList = [
    "All",
    "Activity reports",
    "Incident reports",
    "Procedure reports",
    "Vaccines reports",
  ];

  useEffect(() => {
    handleGetReports();
  }, []);

  const handleGetReports = () => {
    setLoading(true);

    getReports()
      .then((res: any) => {
        setReports(res.data);
      })
      .then((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const memoisedReports = useMemo(() => reports, [reports]);
  return (
    <>
      <LoadingOverlay visible={loading} />
      <Layout title="Report" handleBtnClick={() => {}}>
        <div className="max-w-[1300px] mx-auto py-10">
          {!createReport && (
            <>
              <div className="flex justify-between">
                <div className="flex items-center gap-5 pl-6 pt-6">
                  {tableList.map((item) => (
                    <div
                      key={item}
                      className={`border-b-4  cursor-pointer text-[#4F4F4F] ${
                        tableType === item
                          ? "border-dakeb-green-mid text-[#333333] font-semibold"
                          : "border-transparent"
                      }`}
                      onClick={() => setTableType(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <CatMenu />
              </div>
              <div className="mt-10">
                <ReportTable data={memoisedReports} />
              </div>
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Reports;
