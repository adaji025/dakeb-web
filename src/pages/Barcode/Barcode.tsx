import React from "react";
import { Table } from "@mantine/core";
import Download from "../../components/Barcode/Download";
import { useDisclosure } from "@mantine/hooks";

const users = [
  {
    id: 1,
    barcode_type: "Code 11",
    data: "ABC - 123 - abc",
    width: "300",
    output_type: "PNG",
    date_generated: "06 - 06 - 2010",
  },
  {
    id: 2,
    barcode_type: "Code 11",
    data: "ABC - 123 - abc",
    width: "300",
    output_type: "PNG",
    date_generated: "06 - 06 - 2010",
  },
  {
    id: 3,
    barcode_type: "Code 11",
    data: "ABC - 123 - abc",
    width: "300",
    output_type: "PNG",
    date_generated: "06 - 06 - 2010",
  },
  {
    id: 4,
    barcode_type: "Code 11",
    data: "ABC - 123 - abc",
    width: "300",
    output_type: "PNG",
    date_generated: "06 - 06 - 2010",
  },
];

const Barcode = () => {
  const [active, setActive] = React.useState<"all" | "activity">("activity");
  const [opened, { open, close }] = useDisclosure(true);
  return (
    <>
      <Download {...{ opened, open, close }} />
      <div className="max-w-[1300px] mx-auto py-10">
        <div className="flex gap-5">
          <div
            className={`text-base font-medium cursor-pointer ${
              active === "all"
                ? "border-b-4 border-dakeb-green-dark text-[#4F4F4F]"
                : "text-[#828282]"
            }`}
            onClick={() => setActive("all")}
          >
            All
          </div>
          <div
            className={`text-base font-medium cursor-pointer ${
              active === "activity"
                ? "border-b-4 border-dakeb-green-dark text-[#4F4F4F]"
                : "text-[#828282]"
            }`}
            onClick={() => setActive("activity")}
          >
            Activity Report
          </div>
        </div>

        <div className="mt-10">
          <div className="mt-5">
            <Table verticalSpacing="md">
              <thead>
                <tr>
                  <th>Barcode type</th>
                  <th>Data</th>
                  <th>Width</th>
                  <th>Output type</th>
                  <th>Date generated</th>
                </tr>
              </thead>
              <tbody>
                {users.map((element) => (
                  <tr key={element.id}>
                    <td>{element.barcode_type}</td>
                    <td>{element.data}</td>
                    <td>{element.width}</td>
                    <td>{element.output_type}</td>
                    <td>{element.date_generated}</td>
                    <td>
                      <button
                        className="font-semibold text-dakeb-green-mid"
                        onClick={open}
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Barcode;
