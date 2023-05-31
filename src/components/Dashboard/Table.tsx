import React from "react";
import { Column, useTable, useRowSelect } from "react-table";
import DropDownMenu from "./Dropdown";
// import TableCheckBox from "./Checkbox"

type UserType = {
  name: string;
  phone_number: string;
  email: string;
  salary: number;
  role: any;
  date_joined: string;
};

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

const Table = () => {
  const [tableId] = React.useState("");

  const column: Column<UserType>[] = [
    {
      Header: "Full name",
      accessor: "name" as keyof UserType,
      Cell: (props: any) => (
        <div className="flex items-center gap-1">
          <div className="w-[32px] h-[32px] rounded-full bg-dakeb-green-mid/10 flex justify-center items-center font-bold uppercase">
            cl
          </div>
          <p className="">{props.row.original.name}</p>
        </div>
      ),
    },
    {
      Header: "Email",
      accessor: "email" as keyof UserType,
    },
    {
      Header: "Phone number",
      accessor: "phone_number" as keyof UserType,
    },
    {
      Header: "Role",
      accessor: "role" as keyof UserType,
    },
    {
      Header: "Date joined",
      accessor: "date_joined" as keyof UserType,
    },

    {
      Header: "Salary",
      accessor: "salary" as keyof UserType,
    },
    {
      Header: "",
      accessor: "more" as keyof UserType,
    },
  ];
  const columns = React.useMemo(() => column, []);
  const data = React.useMemo(() => users, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="bg-white table-auto overflow-x-auto pt-3 pb-6 rounded-10 min-h-[300px]">
      <table
        className="w-full table-auto border-spacing-8"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className="text-left px-6 py-3 m-2 whitespace-nowrap"
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, idx) => {
                  if (cell.column.Header === "") {
                    return <DropDownMenu {...{ tableId }} key={idx} />;
                  }
                  return (
                    <td
                      className="px-6 py-3 whitespace-nowrap"
                      {...cell.getCellProps()}
                      //   onClick={() => setTableId(row.original.ticket_id)}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
