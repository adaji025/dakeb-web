import { ColumnDef } from "@tanstack/react-table";
import {IoCopyOutline} from "react-icons/io5"
import { IndeterminateCheckbox } from "./IndeterminateCheckbox";

type UserType = {
  name: string;
  phone_number: string;
  email: string;
  codes: any;
  type: string;
};

export const columns: ColumnDef<UserType>[] = [
  {
    id: "select",
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
    header: "Typpe",
    accessorKey: "type" as keyof UserType,
  },
  {
    id: "codes",
    header: "codes",
    accessorKey: "codes" as keyof UserType,
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div className="text-dakeb-green-mid font-semibold">{row.getValue("codes")}</div>
        <IoCopyOutline color="#157145" />
      </div>
    ),
  },
];
