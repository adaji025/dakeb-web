import { useState, useContext, useEffect } from "react";
import { Table, LoadingOverlay } from "@mantine/core";
import moment from "moment";
import ManagementLayout from "../../components/Management/ManagementLayout";
import { DataContext } from "../../context/DataProvider";
import useNotification from "../../hooks/useNotification";
import { getForms } from "../../services/forms/forms";
import { FormsTypes } from "../../types/forms";

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

const ManageForms = () => {
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);
  const [forms, setForms] = useState<FormsTypes[]>([]);
  const { loading, setLoading } = useContext(DataContext);
  const { handleError } = useNotification();

  console.log(forms)

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
      setSelectedRowIds(forms.map((row: any) => row._id));
    }
  };

  const isRowSelected = (id: string) => selectedRowIds.includes(id);

  useEffect(() => {
    handleGetForms();
  }, []);

  const handleGetForms = () => {
    setLoading(true);

    getForms()
      .then((res: any) => {
        setForms(res.data);
      })
      .then((errors: any) => {
        handleError(errors);
      }).finally(() => {
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
                  <div>Role</div>
                </div>
              </th>
              <th>Permissions</th>
              <th>Created by</th>
              <th> Date created</th>
            </tr>
          </thead>
          <tbody>
            {forms.map((element) => (
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
                <td>{element.description?.slice(0,15)}</td>
                <td>{element.createdBy.name}</td>
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

export default ManageForms;
