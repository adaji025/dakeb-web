import { useState, useEffect, useMemo } from "react";
import { StatCard } from "../../components/Dashboard/StarCard";
import { LoadingOverlay } from "@mantine/core";
import Layout from "../../components/LoggedIn/Layout";
import { staffStatsData } from "./data";
import useNotification from "../../hooks/useNotification";
import { getReports } from "../../services/reports/reports";
import { ReportTypes } from "../../types/reports";
import ReportTable from "../../components/Reports/ReportTable";
import FormTable from "../../components/Forms/FormTable";
import { FormsTypes } from "../../types/forms";
import { getForms } from "../../services/forms/forms";
import BeefChicksTable from "../../components/BeafChickHunters/BeefChicksTable";
import { getHunters } from "../../services/hunters/hunters";
import { HuntersType } from "../../types/hunters";

const StaffDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [tableType, setTableType] = useState<"Reports" | "Forms">("Reports");
  const [reports, setReports] = useState<ReportTypes[]>([]);
  const [forms, setForms] = useState<FormsTypes[]>([]);
  const [hunters, setHunters] = useState<HuntersType[]>([]);

  const { handleError } = useNotification();

  useEffect(() => {
    handleGetReports();
    handleGetForms();
    handleGetHunters();
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

  const handleGetForms = () => {
    setLoading(true);

    getForms()
      .then((res: any) => {
        setForms(res.data);
      })
      .then((errors: any) => {
        handleError(errors);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGetHunters = () => {
    setLoading(true);
    getHunters()
      .then((res: any) => {
        setHunters(res.data);
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const memoisedReports = useMemo(() => reports, [reports]);
  const memoisedForm = useMemo(() => forms, [forms]);

  return (
    <>
      <LoadingOverlay visible={loading} />
      <Layout title="Staff Dashboard" handleBtnClick={() => {}}>
        <div className="max-w-[1300px] mx-auto overflow-x-hidden">
          <div className="grid xs:grid-cols-2 md:grid-cols-4 gap-y-5 place-items-center min-h-[116px] xs:border mt-10 p-4">
            {staffStatsData.map((item, idx) => (
              <div
                key={idx}
                className={`border xs:border-0  w-full ${
                  idx === 3 ? "lg:border-r-0" : "lg:border-r"
                }`}
              >
                <StatCard {...{ item }} />
              </div>
            ))}
          </div>
          <div className="mt-20 border">
            <div className="flex items-center gap-5 pl-6 pt-6">
              <div
                className={`border-b-4 font-semibold cursor-pointer text-[#4F4F4F] ${
                  tableType === "Reports"
                    ? "border-dakeb-green-mid text-[#333333]"
                    : "border-transparent"
                }`}
                onClick={() => setTableType("Reports")}
              >
                Reports
              </div>
              <div
                className={`border-b-4 font-semibold cursor-pointer text-[#4F4F4F] ${
                  tableType === "Forms"
                    ? "border-dakeb-green-mid text-[#333333]"
                    : "border-transparent"
                }`}
                onClick={() => setTableType("Forms")}
              >
                Forms
              </div>
            </div>
            {tableType === "Reports" && <ReportTable data={memoisedReports} />}
            {tableType === "Forms" && <FormTable data={memoisedForm} />}
          </div>

          <div className="mt-20 border min-h-[300px]">
            <div className="flex items-center justify-between gap-5 px-6 pt-6">
              <h2 className="font-semibold">Beef and chick hunter</h2>
              <div className="text-sm">View all</div>
            </div>
            <div className="px-3 mt-3">
              <BeefChicksTable data={hunters} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default StaffDashboard;
