import React from "react";
import { columns } from "../../components/Reports/ReportsTable/Column";
import { ReportsTable } from "../../components/Reports/ReportsTable";

const users = [
  {
    category: "Cooper Lubin",
    department: "dulcesanton@gmail.com",
    submitted_by: "Roger Curtis",
    priority: "low",
    date_submitted: "06 - 06 - 2010",
    status: "accepted",
  },
  {
    category: "Cooper Lubin",
    department: "dulcesanton@gmail.com",
    submitted_by: "Roger Curtis",
    priority: "high",
    date_submitted: "06 - 06 - 2010",
    status: "accepted",
  },
  {
    category: "Cooper Lubin",
    department: "dulcesanton@gmail.com",
    submitted_by: "Lydia Workman",
    priority: "low",
    date_submitted: "06 - 06 - 2010",
    status: "pending",
  },
  {
    category: "Cooper Lubin",
    department: "dulcesanton@gmail.com",
    submitted_by: "Roger Curtis",
    priority: "high",
    date_submitted: "06 - 06 - 2010",
    status: "accepted",
  },
];

const Reports = () => {
  const [tableType, setTableType] = React.useState("All");
  const [tableId] = React.useState("");
  const tableList = [
    "All",
    "Activity reports",
    "Incident reports",
    "Procedure reports",
    "Vaccines reports",
  ];
  return (
    <div className="max-w-[1300px] mx-auto py-10">
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
        <div className="flex gap-10"></div>
      </div>
      <div className="mt-10">
        <ReportsTable data={users} {...{ columns, tableId }} />
      </div>
    </div>
  );
};

export default Reports;
