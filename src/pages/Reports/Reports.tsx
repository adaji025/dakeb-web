import React, { useState, useEffect, useMemo } from "react";
import { LoadingOverlay } from "@mantine/core";
import { CatMenu } from "../../components/Reports/CatMenu";
import { DataContext } from "../../context/DataProvider";
import ReportTable from "../../components/Reports/ReportTable";
import useNotification from "../../hooks/useNotification";
import { deleteReport, getReports } from "../../services/reports/reports";
import Layout from "../../components/LoggedIn/Layout";
import { ReportTypes } from "../../types/reports";
import { useNavigate } from "react-router-dom";
import { showNotification } from "@mantine/notifications";

const Reports = () => {
  const [tableType, setTableType] = useState("All");
  const [loading, setLoading] = useState(false);
  const [reports, setReports] = useState<ReportTypes[]>([]);
  const { handleError } = useNotification();
  const [rowId, setRowId] = useState<string>("");

  const { createReport } = React.useContext(DataContext);
  const tableList = [
    "All",
    "Activity reports",
    "Incident reports",
    "Procedure reports",
    "Vaccines reports",
  ];

  const navigate = useNavigate();

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

  const handleOpenDropdown = (id: string) => {
    if (id === rowId) {
      setRowId("");
    } else {
      setRowId(id);
    }
  };

  const handleDelete = (id: string) => {
    setLoading(true);
    deleteReport(id)
      .then(() => {
        showNotification({
          title: "Success",
          message: "User deleted successfully",
          color: "green",
        });
      })
      .catch((error: any) => {
        handleError(error);
      })
      .finally(() => {
        handleOpenDropdown(id);
        handleGetReports();
        setLoading(false);
      });
  };

  const item = {};

  const memoisedReports = useMemo(() => reports, [reports]);

  const activityReport = memoisedReports.filter(
    (item) => item.category === "Activity"
  );
  const incidentReport = memoisedReports.filter(
    (item) => item.category === "Incident"
  );
  const procedureReport = memoisedReports.filter(
    (item) => item.category === "Procedure"
  );
  const vacinationReport = memoisedReports.filter(
    (item) => item.category === "Vaccination"
  );

  const filteredReports =
    tableType === "All"
      ? memoisedReports
      : tableType === "Activity reports"
      ? activityReport
      : tableType === "Incident reports"
      ? incidentReport
      : tableType === "Procedure reports"
      ? procedureReport
      : vacinationReport;

  return (
    <>
      <LoadingOverlay visible={loading} />
      <Layout
        title="Report"
        handleBtnClick={() =>
          navigate("/reports/create-report", { state: item })
        }
      >
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
                      onClick={() => {
                        setTableType(item);
                        console.log(item);
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <CatMenu />
              </div>
              <div className="mt-10">
                <ReportTable
                  data={filteredReports}
                  handleDelete={handleDelete}
                  rowId={rowId}
                  handleOpenDropdown={handleOpenDropdown}
                />
              </div>
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Reports;
