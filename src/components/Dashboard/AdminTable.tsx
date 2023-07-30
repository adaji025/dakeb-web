import { useState } from "react";
import { Table } from "@mantine/core";

type Props = {
  data: {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    role: string;
    salary: number;
    date_joined: string;
  }[];
};

const AdminStaffTable = ({ data }: Props) => {
  const [selectedRowIds, setSelectedRowIds] = useState<number[]>([]);

  const isAllRowsSelected =
    data.length > 0 && selectedRowIds.length === data.length;

  const handleRowCheckboxChange = (id: number) => {
    setSelectedRowIds((prevId) =>
      prevId.includes(id)
        ? prevId.filter((rowId) => rowId !== id)
        : [...prevId, id]
    );
  };

  const handleSelectAllRows = () => {
    if (isAllRowsSelected) {
      setSelectedRowIds([]);
    } else {
      setSelectedRowIds(data.map((row) => row.id));
    }
  };

  const isRowSelected = (id: number) => selectedRowIds.includes(id);

  return (
    <div className="px-3 mt-3">
      <Table className="overflow-auto">
        <thead>
          <tr>
            <th>
              <div className="flex gap-3">
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
          {data.map((item) => (
            <tr>
              <td>
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    checked={isRowSelected(item.id)}
                    onChange={() => handleRowCheckboxChange(item.id)}
                  />
                  {item.name}
                </div>
              </td>
              <td>{item.email}</td>
              <td>{item.phone_number}</td>
              <td>{item.role}</td>
              <td>{item.salary}</td>
              <td>{item.date_joined}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminStaffTable;
