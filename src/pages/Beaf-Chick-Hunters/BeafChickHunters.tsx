import React, { useState } from "react";
import { Avatar, Table } from "@mantine/core";
import { IoCopyOutline } from "react-icons/io5";
const users = [
  {
    id: 1,
    name: "Cooper Lubin",
    email: "dulcesanton@gmail.com",
    phone_number: "08156431267",
    role: "Sales manager",
    salary: 250000,
    codes: "DGTHE564",
  },
  {
    id: 2,
    name: "Cooper Lubin",
    email: "dulcesanton@gmail.com",
    phone_number: "08156431267",
    role: "Sales manager",
    salary: 250000,
    codes: "DGTHE564",
  },
  {
    id: 3,
    name: "Cooper Lubin",
    email: "dulcesanton@gmail.com",
    phone_number: "08156431267",
    role: "Sales manager",
    salary: 250000,
    codes: "DGTHE564",
  },
  {
    id: 4,
    name: "Cooper Lubin",
    email: "dulcesanton@gmail.com",
    phone_number: "08156431267",
    role: "Sales manager",
    salary: 250000,
    codes: "",
  },
];

const BeafChickHunters = () => {
  const [active, setActive] = React.useState<"beaf" | "chick">("beaf");
  const [selectedRowIds, setSelectedRowIds] = useState<number[]>([]);

  const isAllRowsSelected =
    users.length > 0 && selectedRowIds.length === users.length;
  

  const handleRowCheckboxChange = (id: number) => {
    setSelectedRowIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((rowId) => rowId !== id)
        : [...prevIds, id]
    );
  };

  const handleSelectAllRows = () => {
    if (isAllRowsSelected) {
      setSelectedRowIds([]);
    } else {
      setSelectedRowIds(users.map((row) => row.id));
    }
  };

  const isRowSelected = (id: number) => selectedRowIds.includes(id);

  return (
    <>
   
      <div className="max-w-[1300px] mx-auto overflow-x-hidden py-10">
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
        <div className="mt-5">
          <Table verticalSpacing="md">
            <thead>
              <tr>
                <th>
                  <div className="flex gap-5">
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
              {users.map((element) => (
                <tr
                  key={element.name}
                  className={`border-none ${
                    isRowSelected(element.id) ? "selected" : ""
                  }`}
                >
                  <td>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={isRowSelected(element.id)}
                        onChange={() => handleRowCheckboxChange(element.id)}
                      />
                      <div className="flex items-center gap-2">
                        <Avatar
                          src={null}
                          alt="Profile Picture"
                          color="red"
                          size={40}
                          radius={40}
                        >
                          VR
                        </Avatar>

                        {element.email}
                      </div>
                    </div>
                  </td>
                  <td>{element.phone_number}</td>
                  <td>{element.role}</td>
                  <td>{element.salary}</td>
                  <td>
                    <div className="flex">
                      {element.codes === "" ? (
                        <button className="text-dakeb-green-mid font-bold">
                          Generates code
                        </button>
                      ) : (
                        <div className="flex items-center gap-5 text-dakeb-green-mid font-bold">
                          {element.codes} <IoCopyOutline />
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
  );
};

export default BeafChickHunters;
