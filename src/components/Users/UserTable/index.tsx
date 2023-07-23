"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

import DropDownMenu from "./Dropdown";
import DeactivateSucess from "../Sucess";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  state: any;
  setRowSelection: React.Dispatch<React.SetStateAction<{}>>;
  tableId: string;
}

export function UserTable<TData, TValue>({
  columns,
  data,
  state,
  setRowSelection,
  tableId,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    state,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  });
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close}>
        <DeactivateSucess />
      </Modal>
      <div className="bg-white overflow-x-auto pt-3 pb-6 rounded-10 min-h-[300px]">
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
                      return (
                        <DropDownMenu {...{ tableId }} key={idx} open={open} />
                      );
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
    </>
  );
}
