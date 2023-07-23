import { ColumnDef } from "@tanstack/react-table";

type UserType = {
  category: string;
  department: string;
  submitted_by: string;
  priority: string;
  date_submitted: string;
  status: string;
};

export const columns: ColumnDef<UserType>[] = [
  {
    header: "Category",
    accessorKey: "category" as keyof UserType,
  },
  {
    header: "Submitted by",
    accessorKey: "submitted_by" as keyof UserType,
  },
  {
    header: "Priority",
    accessorKey: "priority" as keyof UserType,
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <div
          className={`h-2 w-2  rounded-full ${
            row.getValue("priority") === "low"
              ? "bg-[#EB0E0B]"
              : row.getValue("priority") === "medium"
              ? "bg-[#F2994A]"
              : "bg-[#1D08AF]"
          }`}
        />
        <div
          className={`${
            row.getValue("priority") === "low"
              ? "text-[#EB0E0B]"
              : row.getValue("priority") === "medium"
              ? "text-[#F2994A]"
              : "text-[#1D08AF]"
          }`}
        >
          {row.getValue("priority")}
        </div>
      </div>
    ),
  },
  {
    header: "Department",
    accessorKey: "department" as keyof UserType,
  },
  {
    header: "Date submitted",
    accessorKey: "date_submitted" as keyof UserType,
  },
  {
    id: "status",
    header: "Status",
    accessorKey: "status" as keyof UserType,
  },
];
