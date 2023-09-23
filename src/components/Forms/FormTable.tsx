import { useState } from "react";
import { Table, Menu, Text } from "@mantine/core";
import { AcceptedIcon, PendingIcon } from "../Svgs";
import { FormsTypes } from "../../types/forms";
import moment from "moment";
import { useNavigate } from "react-router-dom";

type Props = {
  data: FormsTypes[];
};

const FormTable = ({ data }: Props) => {
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);

  const navigate = useNavigate();

  const isAllRowsSelected =
    data.length > 0 && selectedRowIds.length === data.length;

  const handleRowCheckboxChange = (id: string) => {
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
      setSelectedRowIds(data.map((row) => row._id));
    }
  };

  const isRowSelected = (id: string) => selectedRowIds.includes(id);

  return (
    <div className="px-3 mt-3">
      <Table className="overflow-auto">
        <thead>
          <tr>
            <th className="whitespace-nowrap">
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  checked={isAllRowsSelected}
                  onChange={handleSelectAllRows}
                />
                <div>Category</div>
              </div>
            </th>
            <th className="whitespace-nowrap">Submitted by</th>
            <th className="whitespace-nowrap">Department</th>
            <th className="whitespace-nowrap">Priority</th>
            <th className="whitespace-nowrap">Date Submitted</th>
            <th className="whitespace-nowrap">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    checked={isRowSelected(item._id)}
                    onChange={() => handleRowCheckboxChange(item._id)}
                  />
                  {item.name}
                </div>
              </td>
              <td>{item.createdBy.department}</td>
              <td>{item.createdBy.name}</td>
              <td>Low</td>
              <td>{moment(item.createdAt).format("DD-MM-YY")}</td>
              <td>
                {item.status === "0" ? <PendingIcon /> : <AcceptedIcon />}
              </td>
              <td>
                <Text
                  className="cursor-pointer text-sm"
                  weight={500}
                  onClick={() => navigate(`/forms/${item._id}`)}
                >
                  View details
                </Text>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FormTable;
