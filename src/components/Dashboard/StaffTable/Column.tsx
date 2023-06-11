import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type UserType = {
  category: string;
  department: string;
  submitted_to: string;
  date_submitted: string;
  status: string;
};

export const columns: ColumnDef<UserType>[] = [
  {
    header: "Category",
    accessorKey: "category" as keyof UserType,
  },
  {
    header: "Submitted to",
    accessorKey: "submitted_to" as keyof UserType,
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
