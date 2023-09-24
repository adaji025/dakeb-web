import React from "react";
import { Table } from "@mantine/core";
import { AcceptedIcon, PendingIcon } from "../../components/Svgs";
import Layout from "../../components/LoggedIn/Layout";

const users = [
  {
    id: 1,
    category: "Cooper Lubin",
    unit: "dulcesanton@gmail.com",
    submitted_by: "Roger Curtis",
    priority: "low",
    date_submitted: "06 - 06 - 2010",
    status: "accepted",
  },
  {
    id: 2,
    category: "Cooper Lubin",
    unit: "dulcesanton@gmail.com",
    submitted_by: "Roger Curtis",
    priority: "high",
    date_submitted: "06 - 06 - 2010",
    status: "accepted",
  },
  {
    id: 3,
    category: "Cooper Lubin",
    unit: "dulcesanton@gmail.com",
    submitted_by: "Lydia Workman",
    priority: "low",
    date_submitted: "06 - 06 - 2010",
    status: "pending",
  },
  {
    id: 4,
    category: "Cooper Lubin",
    unit: "dulcesanton@gmail.com",
    submitted_by: "Roger Curtis",
    priority: "high",
    date_submitted: "06 - 06 - 2010",
    status: "accepted",
  },
  {
    id: 5,
    category: "Cooper Lubin",
    unit: "dulcesanton@gmail.com",
    submitted_by: "Roger Curtis",
    priority: "medium",
    date_submitted: "06 - 06 - 2010",
    status: "accepted",
  },
];

const MaintenanceChart = () => {
  const [active, setActive] = React.useState<"beaf" | "chick">("beaf");

  return (
    <Layout title="Mantenance Chart" handleBtnClick={() => {}}>
      <div className="max-w-[1300px] mx-auto py-10">
        <div className="flex gap-5">
          <div
            className={`text-base font-medium cursor-pointer ${
              active === "beaf"
                ? "border-b-4 border-dakeb-green-dark text-[#4F4F4F]"
                : "text-[#828282]"
            }`}
            onClick={() => setActive("beaf")}
          >
            Beef hunters
          </div>
          <div
            className={`text-base font-medium cursor-pointer ${
              active === "chick"
                ? "border-b-4 border-dakeb-green-dark text-[#4F4F4F]"
                : "text-[#828282]"
            }`}
            onClick={() => setActive("chick")}
          >
            Chick hunters
          </div>
        </div>

        <div className="mt-5 overflow-auto">
          <Table verticalSpacing="md">
            <thead>
              <tr>
                <th>Full name</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Type</th>
                <th>Codes</th>
              </tr>
            </thead>
            <tbody>
              {users.map((element) => (
                <tr key={element.category}>
                  <td>{element.category}</td>
                  <td>{element.submitted_by}</td>
                  <td>{element.unit}</td>
                  <td>
                    {" "}
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          element.priority === "high"
                            ? "bg-[#EB0E0B]"
                            : element.priority === "medium"
                            ? "bg-[#F2994A]"
                            : "bg-[#1D08AF]"
                        }`}
                      />
                      <div
                        className={`${
                          element.priority === "high"
                            ? "text-[#EB0E0B]"
                            : element.priority === "medium"
                            ? "text-[#F2994A]"
                            : "text-[#1D08AF]"
                        }`}
                      >
                        {element.priority}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex">
                      {element.status === "accepted" ? (
                        <AcceptedIcon />
                      ) : (
                        <div className="flex items-center gap-5 text-dakeb-green-mid font-bold">
                          <PendingIcon />
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </Layout>
  );
};

export default MaintenanceChart;
