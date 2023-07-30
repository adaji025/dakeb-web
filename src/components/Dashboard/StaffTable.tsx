import { useState } from "react";
import { Table } from "@mantine/core";
import { IoCopyOutline } from "react-icons/io5";

type Props = {
  data: {
    id: number;
    category: string;
    department: string;
    submitted_to: string;
    date_submitted: string;
    status: string;
    codes: string;
  }[];
};

const StaffTable = ({ data }: Props) => {
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
                  {item.category}
                </div>
              </td>
              <td>{item.department}</td>
              <td>{item.submitted_to}</td>
              <td>{item.date_submitted}</td>
              <td>
                <div className="flex gap-5">
                  <div className="text-dakeb-green-mid">{item.codes}</div>
                  <IoCopyOutline color="#157145" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default StaffTable;
