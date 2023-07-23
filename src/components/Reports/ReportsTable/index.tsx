import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { AcceptedIcon, PendingIcon } from "../../Svgs";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  tableId: string;
}

export function ReportsTable<TData, TValue>({
  columns,
  data,
}: //  tableId,
DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-white overflow-x-auto pt-3 pb-6 rounded-10 min-h-[300px]">
      <table className="w-full table-auto border-spacing-8">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    className="text-left px-6 py-3 m-2 whitespace-nowrap text-[#828282] font-normal"
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
                  console.log(cell.row.original);
                  if (cell.column.id === "status") {
                    return (
                      <td key={idx} className="flex justify-center border-b py-4">
                        {cell.getValue() === "accepted" ? (
                          <AcceptedIcon />
                        ) : (
                          <PendingIcon />
                        )}
                      </td>
                    );
                  }
                  return (
                    <td
                      className="border-b px-6 py-3 whitespace-nowrap text-[#333333]"
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
      {/* <td colSpan={20}>Page Rows ({table.getRowModel().rows.length})</td> */}
    </div>
  );
}
