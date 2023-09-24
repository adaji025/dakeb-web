import { useContext, useEffect, useState } from "react";
import { Table, LoadingOverlay } from "@mantine/core";
import ManagementLayout from "../../components/Management/ManagementLayout";
import { DataContext } from "../../context/DataProvider";
import useNotification from "../../hooks/useNotification";
import { getReports } from "../../services/reports/reports";
import Layout from "../../components/LoggedIn/Layout";

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

const ManageReports = () => {
  const [selectedRowIds, setSelectedRowIds] = useState<number[]>([]);
  const { loading, setLoading } = useContext(DataContext);
  const [reports, setReports] = useState([]);

  const { handleError } = useNotification();

  console.log("reports ==>", reports);

  const isAllRowsSelected =
    users.length > 0 && selectedRowIds.length === users.length;

  const handleRowCheckboxChange = (id: number) => {
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
      setSelectedRowIds(users.map((row) => row.id));
    }
  };

  const isRowSelected = (id: number) => selectedRowIds.includes(id);

  useEffect(() => {
    handleGetReports();
  }, []);

  const handleGetReports = () => {
    setLoading(true);

    getReports()
      .then((res: any) => {
        setReports(res.data);
      })
      .then((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <LoadingOverlay visible={loading} />
      <Layout title="Manage Report" handleBtnClick={() => {}}>
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
                    <div>Role</div>
                  </div>
                </th>
                <th>Permissions</th>
                <th>Created by</th>
                <th> Date created</th>
              </tr>
            </thead>
            <tbody>
              {users.map((element) => (
                <tr
                  key={element.role}
                  className={`border-none ${
                    isRowSelected(element.id) ? "selected" : ""
                  }`}
                >
                  <td>
                    <div className="flex items-center gap-5">
                      <input
                        type="checkbox"
                        checked={isRowSelected(element.id)}
                        onChange={() => handleRowCheckboxChange(element.id)}
                      />
                      {element.role}
                    </div>
                  </td>
                  <td>{element.permissions}</td>
                  <td>{element.created_by}</td>
                  <td>{element.date_created}</td>
                  <td>
                    <button
                      className={`font-bold py-2 px-4 rounded-full ${
                        element.status === "active"
                          ? "bg-dakeb-green-mid/10 text-dakeb-green-mid"
                          : "text-[#B95A06] bg-[#B95A06]/10"
                      }`}
                    >
                      {element.status === "active" ? "Active" : "Inactive"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ManagementLayout>
      </Layout>
    </>
  );
};

export default ManageReports;
