import { ColumnDef } from "@tanstack/react-table";
import { IndeterminateCheckbox } from "./IndeterminateCheckbox";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type UserType = {
  name: string;
  phone_number: string;
  email: string;
  salary: number;
  role: any;
  date_joined: string;
};


export const columns: ColumnDef<UserType>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <div>
        <IndeterminateCheckbox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      </div>
    ),
  },
  {
    header: "Full name",
    accessorKey: "name" as keyof UserType,
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <div className="w-[32px] h-[32px] rounded-full bg-dakeb-green-mid/10 flex justify-center items-center font-bold uppercase">
          cl
        </div>
        <p className="">{row.getValue("name")}</p>
      </div>
    ),
  },
  {
    header: "Email",
    accessorKey: "email" as keyof UserType,
  },
  {
    header: "Phone number",
    accessorKey: "phone_number" as keyof UserType,
  },
  {
    header: "Role",
    accessorKey: "role" as keyof UserType,
  },
  {
    header: "Date joined",
    accessorKey: "date_joined" as keyof UserType,
  },

  {
    header: "Salary",
    accessorKey: "salary" as keyof UserType,
  },
  {
    id: 'more',
    header: "",
    accessorKey: "more" as keyof UserType,
  },
];
