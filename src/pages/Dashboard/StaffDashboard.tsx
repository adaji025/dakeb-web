import React from "react";
import ParkIcon from "../../assets/svgs/park.svg";
import { columns } from "../../components/Dashboard/StaffTable/Column";
import { StatCard } from "../../components/Dashboard/StaffTable/StarCard";
import { StaffTable } from "../../components/Dashboard/StaffTable";
import { HunterTable } from "../../components/Dashboard/HunterTable";


const users = [
  {
    category: "Cooper Lubin",
    department: "dulcesanton@gmail.com",
    submitted_to: "Roger Curtis",
    date_submitted: "06 - 06 - 2010",
    status: "accepted",
  },
  {
    category: "Cooper Lubin",
    department: "dulcesanton@gmail.com",
    submitted_to: "Roger Curtis",
    date_submitted: "06 - 06 - 2010",
    status: "accepted",
  },
  {
    category: "Cooper Lubin",
    department: "dulcesanton@gmail.com",
    submitted_to: "Lydia Workman",
    date_submitted: "06 - 06 - 2010",
    status: "pending",
  },
  {
    category: "Cooper Lubin",
    department: "dulcesanton@gmail.com",
    submitted_to: "Roger Curtis",
    date_submitted: "06 - 06 - 2010",
    status: "accepted",
  },
];



const StaffDashboard = () => {
  const [tableId] = React.useState("");
  const [tableType, setTableType] = React.useState("Reports");
  const statsData = [
    {
      increase: true,
      title: "Total forms generated",
      figure: 32787,
      percentage: "3.3",
    },
    {
      increase: true,
      title: "Total code generated",
      figure: 32787,
      percentage: "3.3",
    },
    {
      increase: true,
      title: "Total reports generated",
      figure: 32787,
      percentage: "3.3",
    },
    {
      icon: ParkIcon,
      increase: true,
      title: "Revenue",
      figure: 32787,
      percentage: "3.3",
    },
  ];
  return (
    <div className="max-w-[1300px] mx-auto overflow-x-hidden">
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
        <StaffTable data={users} {...{ columns, tableId }} />
      </div>

      <div className="mt-20 border">
        <div className="flex items-center justify-between gap-5 px-6 pt-6">
         <h2 className="font-semibold">Beef and chick hunter</h2>
         <div className="text-sm">View all</div>
        </div>
        <HunterTable {...{tableId}} />
      </div>
    </div>
  );
};

export default StaffDashboard;
