import React, { useState } from "react";
import ParkIcon from "../../assets/svgs/park.svg";
import { StatCard } from "../../components/Dashboard/StarCard";
import { Table } from "@mantine/core";
import { IoCopyOutline } from "react-icons/io5";
import StaffTable from "../../components/Dashboard/StaffTable";
import Layout from "../../components/LoggedIn/Layout";

const data = [
  {
    id: 1,
    category: "Cooper Lubin",
    department: "dulcesanton@gmail.com",
    submitted_to: "Roger Curtis",
    date_submitted: "06 - 06 - 2010",
    status: "accepted",
    codes: "DGTHE564",
  },
  {
    id: 2,
    category: "Cooper Lubin",
    department: "dulcesanton@gmail.com",
    submitted_to: "Roger Curtis",
    date_submitted: "06 - 06 - 2010",
    status: "accepted",
    codes: "DGTHE564",
  },
  {
    id: 3,
    category: "Cooper Lubin",
    department: "dulcesanton@gmail.com",
    submitted_to: "Lydia Workman",
    date_submitted: "06 - 06 - 2010",
    status: "pending",

    codes: "DGTHE564",
  },
  {
    id: 4,
    category: "Cooper Lubin",
    department: "dulcesanton@gmail.com",
    submitted_to: "Roger Curtis",
    date_submitted: "06 - 06 - 2010",
    status: "accepted",
    codes: "DGTHE564",
  },
];

const StaffDashboard = () => {
  const [tableType, setTableType] = React.useState("Reports");
  const [selectedRowIds, setSelectedRowIds] = useState<number[]>([]);

  const isAllRowsSelected =
    data.length > 0 && selectedRowIds.length === data.length;

  const handleRowCheckboxChange = (id: number) => {
    setSelectedRowIds((prevId) =>
      prevId.includes(id)
        ? prevId.filter((rowId) => rowId !== id)
        : [...prevId, id]
    );
  };

  const handleSelectAllRows = () => {
    if (isAllRowsSelected) {
      setSelectedRowIds([]);
    } else {
      setSelectedRowIds(data.map((row) => row.id));
    }
  };

  const isRowSelected = (id: number) => selectedRowIds.includes(id);

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
    <Layout title="Staff Dashboard" handleBtnClick={() => {}}>
      <div className="max-w-[1300px] mx-auto overflow-x-hidden">
        <div className="grid xs:grid-cols-2 md:grid-cols-4 gap-y-5 place-items-center min-h-[116px] xs:border mt-10 p-4">
          {statsData.map((item, idx) => (
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
          <StaffTable data={data} />
        </div>

        <div className="mt-20 border min-h-[300px]">
          <div className="flex items-center justify-between gap-5 px-6 pt-6">
            <h2 className="font-semibold">Beef and chick hunter</h2>
            <div className="text-sm">View all</div>
          </div>
          <div className="px-3 mt-3">
            <Table className="overflow-auto">
              <thead>
                <tr>
                  <th>
                    <div className="flex gap-3">
                      <input
                        type="checkbox"
                        checked={isAllRowsSelected}
                        onChange={handleSelectAllRows}
                      />
                      <div>Full name</div>
                    </div>
                  </th>
                  <th>Email</th>
                  <th>Phone number</th>
                  <th>Type</th>
                  <th>Codes</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr>
                    <td>
                      <div className="flex gap-3">
                        <input
                          type="checkbox"
                          checked={isRowSelected(item.id)}
                          onChange={() => handleRowCheckboxChange(item.id)}
                        />
                        {item.category}
                      </div>
                    </td>
                    <td>{item.department}</td>
                    <td>{item.submitted_to}</td>
                    <td>{item.date_submitted}</td>
                    <td>
                      <div className="flex gap-5">
                        <div className="text-dakeb-green-mid">{item.codes}</div>
                        <IoCopyOutline color="#157145" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StaffDashboard;
