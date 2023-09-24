import { useEffect, useState, useContext } from "react";
import { Table, LoadingOverlay } from "@mantine/core";
import moment from "moment";
import useNotification from "../../hooks/useNotification";
import ManagementLayout from "../../components/Management/ManagementLayout";
import { getDepartments } from "../../services/department/department";
import { DataContext } from "../../context/DataProvider";
import Layout from "../../components/LoggedIn/Layout";

const ManageDepartments = () => {
  const [departments, setDepartments] = useState<departmentsTypes[]>([]);
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);
  const { loading, setLoading } = useContext(DataContext);

  const { handleError } = useNotification();

  const isAllRowsSelected =
    departments.length > 0 && selectedRowIds.length === departments.length;

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
      setSelectedRowIds(departments.map((row) => row._id));
    }
  };

  const isRowSelected = (id: string) => selectedRowIds.includes(id);

  useEffect(() => {
    handleGetDepartments();
  }, []);

  const handleGetDepartments = () => {
    setLoading(true);

    getDepartments()
      .then((res: any) => {
        setDepartments(res.data);
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
      <Layout title="Manage Department" handleBtnClick={() => {}}>
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
                    <div>Name</div>
                  </div>
                </th>
                <th>Description</th>
                <th> Date created</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((element) => (
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
                  <td>{element.description?.slice(0, 15)}</td>
                  <td>{moment(element.createdAt).format("DD-MM-YY")}</td>
                  <td>
                    <button
                    // className={`font-bold py-2 px-4 rounded-full ${
                    //   element.status === "active"
                    //     ? "bg-dakeb-green-mid/10 text-dakeb-green-mid"
                    //     : "text-[#B95A06] bg-[#B95A06]/10"
                    // }`}
                    >
                      Active
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

export default ManageDepartments;
