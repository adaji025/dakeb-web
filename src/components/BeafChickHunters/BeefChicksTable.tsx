import { Table, Avatar } from "@mantine/core";
import { HuntersType } from "../../types/hunters";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import { FaUserLock } from "react-icons/fa";
import { AiOutlineMore } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";

type Props = {
  data: HuntersType[];
  handleDelete?: (id: string) => void;
  handleOpenDropdown?: (id: string) => void;
  handleCloseDropDown?: () => void;
  rowId?: string;
  setAddHunter?: React.Dispatch<React.SetStateAction<boolean>>;
  setEdit?: React.Dispatch<React.SetStateAction<HuntersType | null>>;
};

const BeefChicksTable = ({
  data,
  handleDelete,
  handleOpenDropdown,
  handleCloseDropDown,
  rowId,
  setAddHunter,
  setEdit,
}: Props) => {
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);

  const isAllRowsSelected =
    data.length > 0 && selectedRowIds.length === data.length;

  const handleRowCheckboxChange = (id: string) => {
    setSelectedRowIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((rowId) => rowId !== id)
        : [...prevIds, id]
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
    <Table verticalSpacing="sm">
      <thead>
        <tr>
          <th>
            <div className="flex gap-5">
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
        {data.map((element) => (
          <tr
            key={element.name}
            className={`border-none ${
              isRowSelected(element._id) ? "selected" : ""
            }`}
          >
            <td>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isRowSelected(element._id)}
                  onChange={() => handleRowCheckboxChange(element._id)}
                />
                <div className="flex items-center gap-2">
                  <Avatar
                    src={null}
                    alt="Profile Picture"
                    color="red"
                    size={40}
                    radius={40}
                  >
                    VR
                  </Avatar>

                  {element.name}
                </div>
              </div>
            </td>
            <td>{element.email}</td>
            <td>{element.phonenumber}</td>
            <td>{element.type}</td>
            <td>
              <div className="flex">
                {element.code === "" ? (
                  <button className="text-dakeb-green-mid font-bold">
                    Generates code
                  </button>
                ) : (
                  <div className="flex items-center gap-5 text-dakeb-green-mid font-bold">
                    {element.code} <IoCopyOutline />
                  </div>
                )}
              </div>
            </td>
            <td className="relative">
              <div
                className="cursor-pointer"
                onClick={() => {
                  handleOpenDropdown && handleOpenDropdown(element._id);
                }}
              >
                <AiOutlineMore size={30} />
              </div>
              <div
                className={`shadow bg-white z-10 absolute top-10 -left-28 p-3 flex flex-col gap-3 ${
                  rowId === element._id ? "flex" : "hidden"
                }`}
              >
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => {
                   setEdit && setEdit(element);
                    setAddHunter && setAddHunter(true);
                    handleCloseDropDown && handleCloseDropDown();
                  }}
                >
                  <BiSolidEdit />
                  <div>Edit hunter</div>
                </div>
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => {
                    setEdit && setEdit(element);
                    setAddHunter && setAddHunter(true);
                    handleCloseDropDown && handleCloseDropDown();
                  }}
                >
                  <FaUserLock />
                  <div>View hunter</div>
                </div>
                <div
                  className="flex items-center gap-2 cursor-pointer text-red-500"
                  onClick={() => {
                    handleDelete && handleDelete(element._id);
                    handleCloseDropDown && handleCloseDropDown();
                  }}
                >
                  <FaUserLock />
                  <div>Delete hunter</div>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BeefChicksTable;
