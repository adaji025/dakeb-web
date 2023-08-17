import { useContext, useEffect, useState } from "react";
import { Table, LoadingOverlay } from "@mantine/core";
import moment from "moment";
import ManagementLayout from "../../components/Management/ManagementLayout";
import { DataContext } from "../../context/DataProvider";
import useNotification from "../../hooks/useNotification";
import { getPositions } from "../../services/positions/positions";

type PositionsTypes = {
  _id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
  __v: number
}

const users = [
  {
    id: 1,
    role: "Accountant",
    permissions: "Reports, Forms, Pay slip",
    created_by: "john Doe",
    date_created: "06 - 06 - 2010",
    status: "active",
  },
  {
    id: 1,
    role: "Accountant",
    permissions: "Reports, Forms, Pay slip",
    created_by: "john Doe",
    date_created: "06 - 06 - 2010",
    status: "inactive",
  },
];

const ManagePositions = () => {
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);
  const { loading, setLoading } = useContext(DataContext);
  const [positions, setPositions] = useState<PositionsTypes[]>([]);

  const { handleError } = useNotification();

  console.log(positions);

  const isAllRowsSelected =
    users.length > 0 && selectedRowIds.length === users.length;

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
      setSelectedRowIds(positions.map((row) => row._id));
    }
  };

  const isRowSelected = (id: string) => selectedRowIds.includes(id);

  useEffect(() => {
    handleGetPositions();
  }, []);

  const handleGetPositions = () => {
    setLoading(true);

    getPositions()
      .then((res: any) => {
        setPositions(res.data);
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <LoadingOverlay visible={loading} />
      <ManagementLayout>
        <Table verticalSpacing="md" mt={20}>
          <thead>
            <tr>
              <th>
                <div className="flex gap-5">
                  <input
                    type="checkbox"
                    checked={isAllRowsSelected}
                    onChange={handleSelectAllRows}
                  />
                  <div>name</div>
                </div>
              </th>
              <th>Permissions</th>
              <th>Created by</th>
              <th> Date created</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((element) => (
              <tr
                key={element._id}
                className={`border-none ${
                  isRowSelected(element._id) ? "selected" : ""
                }`}
              >
                <td>
                  <div className="flex items-center gap-5">
                    <input
                      type="checkbox"
                      checked={isRowSelected(element._id)}
                      onChange={() => handleRowCheckboxChange(element._id)}
                    />
                    {element.name}
                  </div>
                </td>
                {/* <td>{element.permissions}</td> */}
                <td>{element.description?.slice(0,15)}</td>
                <td>{moment(element.createdAt).format("DD-MM-YY")}</td>
                <td>
                  <button
                    // className={`font-bold py-2 px-4 rounded-full ${
                    //   element.status === "active"
                    //     ? "bg-dakeb-green-mid/10 text-dakeb-green-mid"
                    //     : "text-[#B95A06] bg-[#B95A06]/10"
                    // }`}
                  >
                    {/* {element.status === "active" ? "Active" : "Inactive"} */}
                    active
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ManagementLayout>
    </>
  );
};

export default ManagePositions;
