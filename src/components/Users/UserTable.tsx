import { useState } from "react";
import moment from "moment";
import { Table } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { AiOutlineMore } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { FaUserLock } from "react-icons/fa";
import { UserType } from "../../types/user";


type Props = {
  data: UserType[];
};

const UserTable = ({ data,  }: Props) => {
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);
  const [rowId, setRowId] = useState<string>("");
 


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

  const handleOpenDropdown = (id: string) => {
    if (id === rowId) {
      setRowId("");
    } else {
      setRowId(id);
    }
  };



  return (
    <div className="px-3 mt-3">
      <Table verticalSpacing={8} className="xl:w-[90%] mb-32">
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
            <th>Position</th>
            <th>Salary</th>
            <th>Date joined</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
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
              <td>{item.email}</td>
              <td>0{item.phonenumber}</td>
              <td>{item.position}</td>
              <td>{item.salary}</td>
              <td className="text-start">
                {moment(item.createdAt).format("DD-MM-YY")}
              </td>
              <td className="relative">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    handleOpenDropdown(item._id);
                  }}
                >
                  <AiOutlineMore size={24} />
                </div>
                <div
                  className={`shadow bg-white z-10 absolute p-3 flex flex-col gap-3 ${
                    rowId === item._id ? "flex" : "hidden"
                  }`}
                >
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => navigate(`/users/${item._id}`, {state: { item, }})}
                  >
                    <BiSolidEdit />
                    <div>Update</div>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <FaUserLock />
                    <div>Reset password</div>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer text-red-500">
                    <FaUserLock />
                    <div>Deactivate</div>
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

export default UserTable;
