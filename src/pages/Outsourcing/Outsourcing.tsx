import React from "react";
import { Table } from "@mantine/core";
import { IoCopyOutline } from "react-icons/io5";
import { AcceptedIcon, PendingIcon } from "../../components/Svgs";
// import { AcceptedIcon, PendingIcon } from "../../Svgs";

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

const Outsourcing = () => {
  const [active, setActive] = React.useState<"beaf" | "chick">("beaf");

  return (
    <div className="max-w-[1300px] mx-auto py-10">
      <>
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

        <div className="mt-10">
          <div className="mt-5">
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
                    <td>{element.priority}</td>
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
      </>
    </div>
  );
};

export default Outsourcing;
