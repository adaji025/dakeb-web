import { Table, Avatar } from "@mantine/core";
import { HuntersType } from "../../types/hunters";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";

type Props = {
  data: HuntersType[];
};

const BeefChicksTable = ({ data }: Props) => {
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
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BeefChicksTable;
