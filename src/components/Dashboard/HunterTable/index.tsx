import React from "react";

import {
  // ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { columns } from "./Column";

import DropDownMenu from "../Dropdown";

interface DataTableProps {
  tableId: string;
}

const data = [
  {
    name: "Cooper Lubin",
    email: "dulcesanton@gmail.com",
    phone_number: "08156431267",
    codes: "DGTHE564",
    type: "Beef hunter",
  },
  {
    name: "Cooper Lubin",
    email: "dulcesanton@gmail.com",
    phone_number: "08156431267",
    codes: "DGTHE564",
    type: "Beef hunter",
  },
  {
    name: "Cooper Lubin",
    email: "dulcesanton@gmail.com",
    phone_number: "08156431267",
    codes: "DGTHE564",
    type: "Beef hunter",
  },
  {
    name: "Cooper Lubin",
    email: "dulcesanton@gmail.com",
    phone_number: "08156431267",
    codes: "DGTHE564",
    type: "Beef hunter",
  },
];

export function HunterTable({ tableId }: DataTableProps) {
  const [rowSelection, setRowSelection] = React.useState({});
  const table = useReactTable({
    data,
    columns,
    state : {rowSelection},
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-white overflow-x-auto pt-3 pb-6 rounded-10 min-h-[300px] text-sm">
      <table className="w-full table-auto border-spacing-8">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    className="text-left px-6 py-3 m-2 whitespace-nowrap"
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder ? null : (
                      <>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, idx) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  if (cell.column.id === "more") {
                    return <DropDownMenu {...{ tableId }} key={idx} />;
                  }
                  return (
                    <td
                      className="border-b px-6 py-3 whitespace-nowrap "
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <td colSpan={20}>Page Rows ({table.getRowModel().rows.length})</td>
    </div>
  );
}
