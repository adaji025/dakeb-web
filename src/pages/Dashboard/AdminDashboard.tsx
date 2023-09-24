import { useState, useEffect } from "react";
import { LoadingOverlay } from "@mantine/core";
import BarChartComponent from "../../components/Dashboard/BarChart";
import PieChartComponent from "../../components/Dashboard/PieChart";
import YearFilter from "../../components/Dashboard/YearFilter";
import { StatCard } from "../../components/Dashboard/StarCard";
import AdminStaffTable from "../../components/Users/UserTable";
import { getUsers } from "../../services/Users/users";
import { UserType } from "../../types/user";
import useNotification from "../../hooks/useNotification";
import Layout from "../../components/LoggedIn/Layout";

const AdminDashboard = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<UserType[]>([]);

  const { handleError } = useNotification();

  const statsData = [
    {
      increase: true,
      title: "Revenue",
      figure: 32787,
      percentage: "3.3",
    },
    {
      increase: true,
      title: "Total employees",
      figure: 32787,
      percentage: "3.3",
    },
    {
      increase: true,
      title: "Reports",
      figure: 32787,
      percentage: "3.3",
    },
    {
      increase: true,
      title: "Referral",
      figure: 32787,
      percentage: "3.3",
    },
  ];

  useEffect(() => {
    handleGetUsers();
  }, []);

  const handleGetUsers = () => {
    setLoading(true);
    getUsers()
      .then((res: any) => {
        setUsers(res.data);
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <LoadingOverlay visible={loading} />
      <Layout title="Admin Dashboard" handleBtnClick={() => {}}>
        <div className="max-w-[1300px] mx-auto overflow-x-hidden pb-10">
          <div className="grid xs:grid-cols-2 md:grid-cols-4 gap-y-5 place-items-center min-h-[116px] xs:border mt-10 p-4">
            {statsData.map((item, idx) => (
              <div
                className={`border xs:border-0  w-full ${
                  idx === 3 ? "lg:border-r-0" : "lg:border-r"
                }`}
              >
                <StatCard {...{ item }} />
              </div>
            ))}
          </div>
          <div className="my-20 border p-4 overflow-x-auto flex gap-10">
            <div className="border-r">
              <div className="flex justify-between items-center px-4 font-medium">
                <h2 className="font-medium">Payroll</h2>
                <div className="flex gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#BDBDBD]" />
                    <span className="text-sm text-[#828282]">Net pay</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-[#002500]" />
                    <span className="text-sm text-[#002500]">Net pay</span>
                  </div>
                  <YearFilter />
                </div>
              </div>
              <BarChartComponent />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="whitespace-nowrap">Team statistics (4)</h2>
              <PieChartComponent />
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#157145]" />
                  <span className="text-sm text-[#157145]">6</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#1D08AF]" />
                  <span className="text-sm text-[#1D08AF]">9</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#DEA90A]" />
                  <span className="text-sm text-[#DEA90A]">19</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#DE4D86]" />
                  <span className="text-sm text-[#DE4D86]">26</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 border">
            <div className="flex justify-between items-center pt-10">
              <h2 className="font-medium pl-6">Employee</h2>
              <div className="pr-6">
                <YearFilter />
              </div>
            </div>
            <AdminStaffTable data={users} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AdminDashboard;
