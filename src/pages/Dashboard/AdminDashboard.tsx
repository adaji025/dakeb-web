import React from "react";
import ParkIcon from "../../assets/svgs/park.svg";
import { StatCard } from "../../components/Dashboard";
import { AdminTable } from "../../components/Dashboard/AdminTable";
import BarChartComponent from "../../components/Dashboard/BarChart";
import PieChartComponent from "../../components/Dashboard/PieChart";
import { columns } from "../../components/Dashboard/AdminTable/Column";
import YearFilter from "../../components/Dashboard/YearFilter";

const users = [
  {
    name: "Cooper Lubin",
    email: "dulcesanton@gmail.com",
    phone_number: "08156431267",
    role: "Sales manager",
    salary: 250000,
    date_joined: "06 - 06 - 2010",
  },
  {
    name: "Cooper Lubin",
    email: "dulcesanton@gmail.com",
    phone_number: "08156431267",
    role: "Sales manager",
    salary: 250000,
    date_joined: "06 - 06 - 2010",
  },
  {
    name: "Cooper Lubin",
    email: "dulcesanton@gmail.com",
    phone_number: "08156431267",
    role: "Sales manager",
    salary: 250000,
    date_joined: "06 - 06 - 2010",
  },
  {
    name: "Cooper Lubin",
    email: "dulcesanton@gmail.com",
    phone_number: "08156431267",
    role: "Sales manager",
    salary: 250000,
    date_joined: "06 - 06 - 2010",
  },
];

const AdminDashboard = () => {
  const [rowSelection, setRowSelection] = React.useState({});
  const [tableId] = React.useState("");
  const statsData = [
    {
      icon: ParkIcon,
      increase: true,
      title: "Revenue",
      figure: 32787,
      percentage: 3.3,
    },
    {
      icon: ParkIcon,
      increase: true,
      title: "Revenue",
      figure: 32787,
      percentage: 3.3,
    },
    {
      icon: ParkIcon,
      increase: true,
      title: "Revenue",
      figure: 32787,
      percentage: 3.3,
    },
    {
      icon: ParkIcon,
      increase: true,
      title: "Revenue",
      figure: 32787,
      percentage: 3.3,
    },
  ];

  console.log(rowSelection);
  return (
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
          <BarChartComponent />
        </div>
        <div className="flex justify-center">
          <PieChartComponent />
        </div>
      </div>
      <div className="mt-20 border">
        <div className="flex justify-between items-center pt-10">
          <h2 className="font-medium pl-6">Employee</h2>
          <div className="pr-6">
            <YearFilter />
          </div>
        </div>
        <AdminTable
          data={users}
          {...{ columns, tableId, setRowSelection, state: { rowSelection } }}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
