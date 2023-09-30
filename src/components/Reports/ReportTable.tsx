import { useState } from "react";
import { Table } from "@mantine/core";
import { AcceptedIcon, PendingIcon } from "../Svgs";
import { ReportTypes } from "../../types/reports";
import moment from "moment";
import { useNavigate } from "react-router";
import { BiSolidEdit } from "react-icons/bi";
import { AiOutlineMore } from "react-icons/ai";
import { FaUserLock } from "react-icons/fa";

type Props = {
  data: ReportTypes[];
  handleDelete?: (id: string) => void;
  handleOpenDropdown?: (id: string) => void;
  rowId?: string;
};

const ReportTable = ({
  data,
  handleDelete,
  handleOpenDropdown,
  rowId,
}: Props) => {
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);

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

  const navigate = useNavigate();

  return (
    <div className="px-3 mt-3 overflow-auto">
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
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    checked={isRowSelected(item._id)}
                    onChange={() => handleRowCheckboxChange(item._id)}
                  />
                  {item.category}
                </div>
              </td>
              <td>{item.submittedBy.name}</td>
              <td>{item.submittedBy.department}</td>
              <td
                className={`${
                  item.priority === "High"
                    ? "text-[#EB0E0B]"
                    : item.priority === "Medium"
                    ? "text-[#F2994A]"
                    : "text-[#1D08AF]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      item.priority === "High"
                        ? "bg-[#EB0E0B]"
                        : item.priority === "Medium"
                        ? "bg-[#F2994A]"
                        : "bg-[#1D08AF]"
                    }`}
                  />
                  {item.priority}
                </div>
              </td>
              <td>{moment(item.createdAt).format("DD-MM-YY")}</td>
              <td>
                {item.status === true ? <AcceptedIcon /> : <PendingIcon />}
              </td>
              {/* <td
                className="cursor-pointer font-medium"
                onClick={() => navigate(`/reports/${item._id}`)}
              >
                View Details
              </td> */}
              <td className="relative">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    handleOpenDropdown && handleOpenDropdown(item._id);
                  }}
                >
                  <AiOutlineMore size={24} />
                </div>
                <div
                  className={`shadow bg-white z-10 absolute -left-24 p-3 flex flex-col gap-3 ${
                    rowId === item._id ? "flex" : "hidden"
                  }`}
                >
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() =>
                      navigate(`/reports/create-report`, { state: { item } })
                    }
                  >
                    <BiSolidEdit />
                    <div>Edit report</div>
                  </div>
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() =>
                      navigate(`/reports/${item._id}`, { state: { item } })
                    }
                  >
                    <FaUserLock />
                    <div>View report</div>
                  </div>
                  <div
                    className="flex items-center gap-2 cursor-pointer text-red-500"
                    onClick={() => handleDelete && handleDelete(item._id)}
                  >
                    <FaUserLock />
                    <div>Delete report</div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ReportTable;
